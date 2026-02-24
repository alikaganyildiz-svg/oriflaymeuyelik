const BASE = 'https://tr.oriflame.com';

export async function GET(request, { params }) {
    return proxyRequest(request, params, 'GET');
}
export async function POST(request, { params }) {
    return proxyRequest(request, params, 'POST');
}
export async function PUT(request, { params }) {
    return proxyRequest(request, params, 'PUT');
}
export async function DELETE(request, { params }) {
    return proxyRequest(request, params, 'DELETE');
}
export async function OPTIONS(request, { params }) {
    return proxyRequest(request, params, 'OPTIONS');
}

async function proxyRequest(request, params, method) {
    const pathSegments = await params.path;
    const path = Array.isArray(pathSegments) ? pathSegments.join('/') : pathSegments || '';

    // Reconstruct query string
    const url = new URL(request.url);
    const queryString = url.search;
    const targetUrl = `${BASE}/${path}${queryString}`;

    // Forward headers (exclude host)
    const forwardHeaders = {};
    for (const [key, value] of request.headers.entries()) {
        if (!['host', 'connection', 'transfer-encoding'].includes(key.toLowerCase())) {
            forwardHeaders[key] = value;
        }
    }
    forwardHeaders['origin'] = BASE;
    forwardHeaders['referer'] = `${BASE}/`;

    const fetchOptions = {
        method,
        headers: forwardHeaders,
        redirect: 'follow',
    };

    if (method !== 'GET' && method !== 'HEAD' && method !== 'OPTIONS') {
        try {
            fetchOptions.body = await request.text();
        } catch (_) { }
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);

    try {
        const res = await fetch(targetUrl, { ...fetchOptions, signal: controller.signal });
        clearTimeout(timer);
        const contentType = res.headers.get('content-type') || '';
        const body = await res.arrayBuffer();

        const responseHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': '*',
            'Content-Type': contentType,
        };

        return new Response(body, {
            status: res.status,
            headers: responseHeaders,
        });
    } catch (err) {
        clearTimeout(timer);
        console.error('[oriflame-catchall-proxy]', targetUrl, err.name === 'AbortError' ? 'TIMEOUT' : err.message);
        return new Response(err.name === 'AbortError' ? 'Gateway timeout' : 'Proxy error', {
            status: err.name === 'AbortError' ? 504 : 502,
            headers: { 'Access-Control-Allow-Origin': '*' },
        });
    }
}
