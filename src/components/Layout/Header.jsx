'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Ana Sayfa', href: '/' },
        { name: 'Katalog', href: '/katalog' },
        { name: 'Blog', href: '/blog' },
    ];

    const guideLinks = [
        { name: 'Kazanç Tablosu', href: '/blog/oriflame-kazanc-tablosu-2026' },
        { name: 'Kargo Sıfırlama', href: '/blog/oriflame-kargo-sifirlama-2026' },
        { name: 'NovAge Leke Seti', href: '/novage-leke-giderici-set-incelemesi' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
            {/* Top Bar removed for cleaner look or kept minimal */}
            <div className="bg-primary text-white text-xs py-2 text-center font-medium tracking-wide">
                ORIFLAME İLE HAYALLERİNE KAPI ARALA - ÜCRETSİZ KAYIT
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex flex-col items-center group">
                            <span className="text-2xl md:text-3xl font-sans font-medium tracking-[0.15em] text-gray-800 group-hover:text-primary transition-colors">ORIFLAME</span>
                            <div className="flex items-center w-full mt-1">
                                <span className="h-[1px] bg-gray-400 flex-grow"></span>
                                <span className="px-3 text-[9px] tracking-[0.3em] text-gray-600 font-medium uppercase">Sweden</span>
                                <span className="h-[1px] bg-gray-400 flex-grow"></span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            link.href.startsWith('/') ? (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-600 hover:text-primary transition-colors uppercase tracking-wide"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-600 hover:text-primary transition-colors uppercase tracking-wide"
                                >
                                    {link.name}
                                </a>
                            )
                        ))}

                        {/* Dropdown for Rehber */}
                        <div className="relative group">
                            <button className="flex items-center text-sm font-medium text-gray-600 hover:text-primary transition-colors uppercase tracking-wide">
                                Rehber
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            <div className="absolute top-full right-0 hidden group-hover:block pt-4 w-60 z-50">
                                <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-2">
                                    {guideLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* CTA Button removed per user request */}

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-900 hover:text-primary p-2"
                            aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg z-50 h-screen overflow-y-auto">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            link.href.startsWith('/') ? (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block py-3 border-b border-gray-50 text-base font-medium text-gray-700 hover:text-primary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block py-3 border-b border-gray-50 text-base font-medium text-gray-700 hover:text-primary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            )
                        ))}

                        {/* Mobile Rehber Links */}
                        <div className="py-2 border-b border-gray-50">
                            <span className="block py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Rehber</span>
                            <div className="pl-4 space-y-1 mt-1">
                                {guideLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="block py-2 text-base font-medium text-gray-600 hover:text-primary"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
