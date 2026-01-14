'use client'

import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Activity, ArrowRight, Shield, Sparkles } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                >
                    <Sparkles className="w-4 h-4 text-primary-400" />
                    <span className="text-sm text-white/70">AI-Powered Health Intelligence</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    <span className="text-white">Your </span>
                    <span className="text-gradient bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent bg-300% animate-gradient">
                        Longevity &
                    </span>
                    <br />
                    <span className="text-gradient bg-gradient-to-r from-accent-400 via-primary-400 to-accent-500 bg-clip-text text-transparent bg-300% animate-gradient">
                        Health Passport
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    The diet log and health observability layer that learns you.
                    <br className="hidden md:block" />
                    <span className="text-white/80">Track everything. Understand patterns. Optimize your life.</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <Button size="lg" className="group">
                        Start Your Passport
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="secondary" size="lg">
                        See How It Works
                    </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm"
                >
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        <span>HIPAA Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4" />
                        <span>Real-time Insights</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        <span>AI-Powered Analysis</span>
                    </div>
                </motion.div>
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
                    className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-white/40 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    )
}
