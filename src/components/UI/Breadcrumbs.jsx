'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
    const pathname = usePathname();

    // Define static translations for path segments if needed
    const pathTranslations = {
        blog: 'Blog',
        katalog: 'Katalog',
        iletisim: 'İletişim',
        // We can add more specific mappings here
    };

    // Skip rendering on the home page entirely
    if (pathname === '/') return null;

    // Split paths and remove empty strings
    const pathSegments = pathname.split('/').filter((segment) => segment !== '');

    return (
        <nav className="w-full bg-gray-50/50 border-b border-gray-100 py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ol className="flex items-center space-x-2 text-sm text-gray-500 flex-wrap">
                    {/* Home Link */}
                    <li>
                        <Link href="/" className="flex items-center hover:text-primary transition-colors">
                            <Home size={16} className="mr-1" />
                            <span className="hidden sm:inline">Anasayfa</span>
                        </Link>
                    </li>

                    {/* Dynamic Segments */}
                    {pathSegments.map((segment, index) => {
                        // Build the cumulative path for each segment link
                        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathSegments.length - 1;

                        // Try to use a translation, or fallback to the capitalized segment name
                        let displayName = pathTranslations[segment] || segment.replace(/-/g, ' ');
                        // Capitalize title
                        displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

                        return (
                            <li key={href} className="flex items-center">
                                <ChevronRight size={16} className="text-gray-400 mx-1 flex-shrink-0" />
                                {isLast ? (
                                    <span className="text-gray-900 font-medium truncate max-w-[150px] sm:max-w-none" title={displayName}>
                                        {displayName}
                                    </span>
                                ) : (
                                    <Link href={href} className="hover:text-primary transition-colors truncate max-w-[100px] sm:max-w-none" title={displayName}>
                                        {displayName}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
