'use client'

import { Button } from '@/components/ui/Button'
import { PassportCard } from '@/components/ui/PassportCard'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Passport-themed Background */}
            <div className="absolute inset-0 bg-[#070b14]">
                {/* Subtle passport texture pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A90E2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                {/* Brand color orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-400/8 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-mind-400/8 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vitality-400/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left: Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-400/10 border border-primary-400/20 mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-vitality-400 animate-pulse" />
                            <span className="text-sm text-primary-300">Bioconscious Living™</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                        >
                            <span className="text-white">Your </span>
                            <span className="bg-gradient-to-r from-primary-400 via-mind-400 to-vitality-400 bg-clip-text text-transparent">
                                Longevity
                            </span>
                            <br />
                            <span className="text-white">&amp; </span>
                            <span className="bg-gradient-to-r from-vitality-400 via-primary-400 to-mind-400 bg-clip-text text-transparent">
                                Health Passport
                            </span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/60 max-w-xl mb-8 leading-relaxed"
                        >
                            The dietary observability layer that learns you.
                            <br className="hidden md:block" />
                            <span className="text-white/80">Track. Understand. Prevent.</span>
                        </motion.p>

                        {/* Mission Statement */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="text-sm text-primary-300/70 mb-10 italic"
                        >
                            "The last generation to need hospitals for preventable conditions"
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
                        >
                            <Button size="lg" className="group">
                                Become Bioconscious
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button variant="secondary" size="lg">
                                See How It Works
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right: Passport Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex-shrink-0 hidden lg:block"
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
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-primary-400/30 flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-primary-400/50 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    )
}
