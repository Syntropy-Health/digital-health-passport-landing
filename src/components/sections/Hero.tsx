'use client'

import { Button } from '@/components/ui/Button'
import { PassportCard } from '@/components/ui/PassportCard'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#070b14]">
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A90E2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-400/8 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-mind-400/8 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left: Minimal Text */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vitality-400/10 border border-vitality-400/20 mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-vitality-400 animate-pulse" />
                            <span className="text-xs text-vitality-300">Bioconscious Living™</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
                        >
                            <span className="text-white">Your </span>
                            <span className="bg-gradient-to-r from-primary-400 to-vitality-400 bg-clip-text text-transparent">
                                Health Passport
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-white/50 mb-8"
                        >
                            Track. Understand. <span className="text-white/80">Prevent.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center lg:items-start gap-3"
                        >
                            <Button size="lg" className="group">
                                Get Started
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button variant="ghost" size="lg">
                                Watch Demo
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right: Passport Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex-shrink-0"
                    >
                        <div className="animate-float">
                            <PassportCard />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
                >
                    <div className="w-1 h-1.5 bg-white/40 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    )
}
