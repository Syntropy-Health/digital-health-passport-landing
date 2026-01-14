'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function Footer() {
    return (
        <footer className="relative py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                            <Heart className="w-4 h-4 text-white" />
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
