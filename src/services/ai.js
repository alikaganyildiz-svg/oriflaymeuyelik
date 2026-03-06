export async function generateDailyBlogContent() {
    // 1. API Key Güvenliği
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error("API Key missing");
        return { error: "API Key (GEMINI_API_KEY) environment variable is missing!" };
    }

    // Generate random topic from pool
    const topicsPool = [
        "Mart & Nisan Bahar Cilt Bakımı Süreci ve NovAge+ Tavsiyesi",
        "Ramazan Bayramı Makyaj Önerileri ve Kalıcı Rujlar",
        "Düğün Sezonuna Hazırlık: Pürüzsüz Bir Cilt ve Parlayan Saçlar",
        "Yaz Geliyor: Vücut Sıkılaştırma ve Selülit Karşıtı Optimals Serileri",
        "Anneler Günü İçin En Özel Oriflame Parfüm Hediyeleri",
        "Sağlıklı Yaşam ve Diyet: Wellness by Oriflame ile Formda Kalın",
        "The One Serisi ile Trend İncelemesi: Pratik ve Etkili Güzellik",
        "Giordani Gold'un Lüksü: 50 Yaş Üstü Zarafet ve Olgun Cilt Bakımı",
        "Güneş Koruyucular (Sun 360) Neden Baharda Şarttır?",
        "Eczane Cilt Bakımından Esinlenen NovAge Routine Neden Farklı?"
    ];
    const selectedTheme = topicsPool[Math.floor(Math.random() * topicsPool.length)];

    // Create Prompt
    const promptText = `
    Oriflame üyeleri için yüksek kaliteli, 'Vogue' veya 'Elle' dergisi tadında Türkçe bir blog yazısı hazırla.
    GENEL TEMA: '${selectedTheme}'
    
    GÖREV:
    Bu genel temadan yola çıkarak, bugünün tarihine ve mevsime uygun, okuyucuyu içine çeken, duygusal ve ilham verici bir makale yaz.
    
    ALTIN KURALLAR (HARFİYEN UYULACAK):
    
    1. BAĞLAM VE SATIŞ ODAKLILIK: Yazıyı sadece bilgi vererek BİTİREMEZSİN. Mutlaka yazının son çeyreğinde konuyu Oriflame ürünlerine, '%20 indirim' fırsatına, 'geliş fiyatından alma' avantajına ve tamamen ücretsiz Marka Ortağı olmanın faydalarına BAĞLAMALISIN. Okuyucuyu üye olmaya çok güçlü şekilde ikna et.

    2. SABİT VE ŞIK CTA BUTONU ZORUNLULUĞU: Makalenin en altına, yazının bitişinden hemen sonra, düz metin linki YERİNE AŞAĞIDAKİ HTML KOD BLOĞUNU ZORUNLU OLARAK, BİREBİR KOPYALAYARAK YAPIŞTIR:
       <div class="flex justify-center mt-12 mb-4">
         <a href="/#basvuru" class="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 text-center no-underline">
           🎁 İndirimleri Kaçırmamak ve Ücretsiz Üye Olmak İçin Hemen Tıklayın!
         </a>
       </div>

    3. KESİNLİKLE YASAK OLANLAR (KIRMIZI ÇİZGİ): Yazının hiçbir yerine KESİNLİKLE WhatsApp, Instagram, Facebook gibi paylaşım ikonları, linkleri veya butonları EKLEME. "PopularSearches" gibi bileşenler EKLEME. Okuyucunun tıklayacağı TEK YER, yukarıda verdiğim yeşil CTA butonu olmalıdır.
    
    4. FORMAT VE GİZLİLİK: 
        - Yanıtın SADECE geçerli bir JSON objesi olmalı.
        - 'content' alanı tarayıcıda render edilecek SAF HTML olmalıdır.
        - Yazının yapay zeka tarafından yazıldığını ASLA belli etme.
        - Paragrafları <p>, başlıkları <h2> ve <h3>, listeleri <ul><li> ile oluştur.
    
    Beklenen JSON Yapısı:
    {
        "title": "Çarpıcı Dergi Başlığı Buraya",
        "content": "<p>Giriş paragrafı...</p><h2>Bölüm Başlığı</h2><p>...[sihirli satış kurgusu]...[ZORUNLU HTML CTA BUTONU BURAYA]</p>",
        "category": "Kampanya / Ürün İnceleme / Kazanç",
        "image_prompt": "Yazının içeriğini en iyi yansıtan, fotorealistik İNGİLİZCE görsel oluşturma komutu",
        "image_keyword": "SADECE şunlardan biri: 'skincare', 'makeup', 'business', 'nature', 'perfume', 'wellness', 'hair'"
    }

    Yazı Uzunluğu: Okuyucuyu sıkmayacak ama doyurucu olacak şekilde (ortalama 500-600 kelime).
  `;

    try {
        // 2. Call Google Gemini API
        // FIX: Using specific model version gemini-2.5-flash as requested by user
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: promptText }] }]
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Gemini API Error:", response.status, errorText);
            return { error: `Gemini API responded with ${response.status}: ${errorText}` };
        }

        const data = await response.json();
        let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!rawText) return { error: "Gemini returned empty content." };

        // Clean JSON formatting (Markdown fences and potential noise)
        rawText = rawText.trim();

        // 1. Try to find the first '{' and the last '}' to isolate the JSON object
        const firstOpenBrace = rawText.indexOf('{');
        const lastCloseBrace = rawText.lastIndexOf('}');

        if (firstOpenBrace !== -1 && lastCloseBrace !== -1 && lastCloseBrace > firstOpenBrace) {
            rawText = rawText.substring(firstOpenBrace, lastCloseBrace + 1);
        } else {
            return { error: "Could not find valid JSON object in Gemini response." };
        }

        let aiPost;
        try {
            aiPost = JSON.parse(rawText);
        } catch (parseError) {
            console.error("JSON Parse Error:", parseError);
            console.error("Raw Text causing error:", rawText);
            // Attempt to sanitize common issues like trailing commas or newlines strings in JSON
            // This is a desperate attempt fallback
            try {
                // Remove trailing commas before closing braces/brackets
                const sanitizedText = rawText.replace(/,\s*([\]}])/g, '$1');
                aiPost = JSON.parse(sanitizedText);
            } catch (retryError) {
                return { error: `JSON Parse Failed: ${parseError.message}` };
            }
        }

        // FALLBACK: If AI returned plain text (no HTML tags), force wrap in paragraphs
        if (aiPost.content && !aiPost.content.includes('<p>') && !aiPost.content.includes('<h2>')) {
            aiPost.content = aiPost.content
                .split('\n')
                .filter(line => line.trim() !== '')
                .map(line => `<p>${line.trim()}</p>`)
                .join('');
        }

        // 3. Image Generation Strategy (Production Ready)
        // We use Unsplash for reliable, high-quality, and persistent images.
        // This avoids API key requirements, rate limits, and ephemeral file system issues.

        let imageUrl = '';
        const imageKeyword = aiPost.image_keyword || 'beauty';

        // Dynamic Unsplash Selection based on keyword
        const unsplashMap = {
            'skincare': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1280&q=80',
            'makeup': 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1280&q=80',
            'business': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1280&q=80',
            'nature': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1280&q=80',
            'perfume': 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1280&q=80',
            'wellness': 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1280&q=80',
            'hair': 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1280&q=80'
        };

        if (unsplashMap[imageKeyword]) {
            imageUrl = unsplashMap[imageKeyword];
        } else {
            // Fallback for generic or unknown keywords
            imageUrl = `https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=1280&auto=format&fit=crop`;
        }

        console.log("Assigned Production Image URL:", imageUrl);
        aiPost.generated_image_url = imageUrl;

        return aiPost;

    } catch (error) {
        console.error("AI Generation Exception:", error);
        return { error: `Internal Server Error: ${error.message}` };
    }
}
