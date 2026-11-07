"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { assetPath } from '@/lib/utils';

const LEFT_LOGOS = [
    { src: "/assets/Logo_ITB.png", alt: "Logo ITB" },
    { src: "/assets/Logo_UPI.png", alt: "Logo UPI" },
    { src: "/assets/Logo_Salman_ITB.png", alt: "Logo Salman ITB" },
];

const RIGHT_LOGOS = [
    { src: "/assets/Logo_KAMIL_ITB.png", alt: "Logo KAMIL Pascasarjana ITB" },
    { src: "/assets/Logo_GAMAIS_ITB.png", alt: "Logo GAMAIS ITB" },
    { src: "/assets/Logo_AMKI.png", alt: "Logo AMKI" },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-white/95 backdrop-blur-md">
            <div className="container relative mx-auto flex h-16 items-center justify-between px-3 lg:h-24 lg:px-6">

                {/* Left Logos: ITB, UPI, Salman ITB */}
                <div className="hidden items-center gap-3 lg:flex xl:gap-5">
                    {LEFT_LOGOS.map((logo) => (
                        <img
                            key={logo.alt}
                            src={assetPath(logo.src)}
                            alt={logo.alt}
                            className="h-12 w-auto object-contain mix-blend-multiply lg:h-14 xl:h-16"
                        />
                    ))}
                </div>

                {/* Center Title - Centered on all screens */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
                    <Link href="/">
                        <h1
                            className="bg-clip-text text-xl font-extrabold tracking-[0.1em] text-transparent drop-shadow-sm transition-all hover:opacity-90 sm:text-2xl lg:text-5xl lg:tracking-[0.2em]"
                            style={{
                                backgroundImage: 'linear-gradient(to left, #75cac3, #509304)',
                            }}
                        >
                            TAILINGSIM
                        </h1>
                    </Link>
                </div>

                {/* Right Section - Right Logos (KAMIL, GAMAIS, AMKI) + Hamburger Menu */}
                <div className="relative ml-auto flex items-center gap-3 lg:ml-0 xl:gap-5">
                    <div className="hidden items-center gap-3 lg:flex xl:gap-5">
                        {RIGHT_LOGOS.map((logo) => (
                            <img
                                key={logo.alt}
                                src={assetPath(logo.src)}
                                alt={logo.alt}
                                className="h-12 w-auto object-contain mix-blend-multiply lg:h-14 xl:h-16"
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-800 focus:outline-none"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Dropdown Menu */}
                    {isMenuOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-gray-200 bg-white py-2 shadow-xl backdrop-blur-xl">
                            <Link
                                href="/simulation"
                                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Simulasi
                            </Link>
                            <Link
                                href="/empowerment"
                                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Kalkulator BUMDes
                            </Link>
                            <Link
                                href="/about"
                                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Metodologi
                            </Link>
                            <Link
                                href="/documentation"
                                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Dokumentasi
                            </Link>
                            <Link
                                href="/team"
                                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pengembang
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
