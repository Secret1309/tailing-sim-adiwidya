"use client";

import { Header } from "@/components/layout/Header";
import { ArrowLeft, GraduationCap, MapPin } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";

export default function TeamPage() {
    const researchers = [
        {
            name: "Dzaky Zahy Rabbani",
            role: "Numerical Modelling & Developer",
            uni: "Institut Teknologi Bandung (ITB)",
            major: "Oceanography - FITB",
            img: "/assets/pp_dzaky.jpg",
        },
        {
            name: "Muhammad Ilham Saripul Milah",
            role: "Lead Researcher & Full-Stack Developer",
            uni: "Institut Teknologi Bandung (ITB)",
            major: "Metallurgical Engineering - FTTM",
            img: "/assets/pp_ilham_team.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            <main className="container mx-auto max-w-6xl px-4 py-12">
                <Link href="/" className="mb-8 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-800">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Beranda
                </Link>

                <div className="mb-12 text-center">
                    <span className="mb-2 block text-sm font-semibold uppercase tracking-widest" style={{ color: '#509304' }}>RANU 2.0 FSM UKSW 2026</span>
                    <h1 className="text-4xl font-bold text-gray-900">Tim Pengembang TAILINGSIM</h1>
                    <p className="mt-4 text-gray-600">Riset dan pengembangan platform simulasi upcycling tailing HPAL nikel laterit untuk kompetisi RANU 2.0 FSM UKSW 2026 - Subtema Environmental Technology.</p>
                </div>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {researchers.map((res, i) => (
                            <div key={i} className="group w-full max-w-sm overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                                <div className="relative h-72 w-full bg-white overflow-hidden">
                                    <Image
                                        src={res.img}
                                        alt={res.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900">{res.name}</h3>
                                    <p className="mb-4 text-sm font-medium" style={{ color: '#509304' }}>{res.role}</p>

                                    <div className="space-y-2 text-sm text-gray-500">
                                        <div className="flex items-start gap-2">
                                            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0" />
                                            <span>{res.uni}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 shrink-0" />
                                            <span>{res.major}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logos - ITB, FSM UKSW & UKSW */}
                <div className="mt-20 flex flex-col items-center justify-center space-y-4 opacity-50 grayscale transition-all hover:grayscale-0">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Supported By</h3>
                    <div className="flex items-center gap-8">
                        <div className="relative h-16 w-16 lg:h-20 lg:w-20">
                            <Image src="/assets/Logo_ITB.png" alt="ITB" fill className="object-contain" />
                        </div>
                        <div className="relative h-16 w-16 lg:h-20 lg:w-20">
                            <Image src="/assets/sainsmatcropped.png" alt="FSM UKSW" fill className="object-contain" />
                        </div>
                        <div className="relative h-16 w-16 lg:h-20 lg:w-20">
                            <Image src="/assets/UKSW.png" alt="UKSW" fill className="object-contain" />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
