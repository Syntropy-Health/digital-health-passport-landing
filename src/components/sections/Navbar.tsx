'use client'

import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-between rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 px-6 py-3">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                            <Heart className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-white hidden sm:block">Health Passport</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">Features</a>
                        <a href="#how-it-works" className="text-sm text-white/70 hover:text-white transition-colors">How It Works</a>
                        <a href="https://syntropyhealth.bio" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">About</a>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Button size="sm">Get Early Access</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white/70 hover:text-white"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/5 p-6"
                    >
                        <div className="flex flex-col gap-4">
                            <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
                            <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</a>
                            <a href="https://syntropyhealth.bio" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">About</a>
                            <Button className="w-full mt-2">Get Early Access</Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    )
}
