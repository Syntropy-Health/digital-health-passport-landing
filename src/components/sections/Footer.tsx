'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="relative py-12 border-t border-primary-400/10 bg-[#070b14]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-8 h-8 relative">
                            <Image
                                src="/syntropy.svg"
                                alt="Syntropy Health"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-semibold text-white">Syntropy Health</span>
                    </motion.div>

                    {/* Links */}
                    <div className="flex items-center gap-8 text-sm text-white/50">
                        <a href="https://syntropyhealth.bio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            syntropyhealth.bio
                        </a>
                        <a href="https://clinic.healome.one" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            clinic.healome.one
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-white/40">
                        © {new Date().getFullYear()} Syntropy Health. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
