'use client'

import { motion } from 'framer-motion'
import {
    Brain,
    Clock,
    HeartPulse,
    MessageSquare,
    TrendingUp,
    Utensils,
    Zap
} from 'lucide-react'

const features = [
    {
        icon: MessageSquare,
        title: 'Log Anywhere',
        description: 'Voice, text, WhatsApp, Slack. Your health data flows in naturally, no apps to open.',
        color: 'from-primary-400 to-primary-600',
    },
    {
        icon: Brain,
        title: 'AI That Learns You',
        description: 'Every log builds your health memory. Patterns emerge. Insights compound over time.',
        color: 'from-mind-400 to-mind-600',
    },
    {
        icon: TrendingUp,
        title: 'Dietary Observability',
        description: 'See correlations between diet, sleep, energy, and mood. Your body\'s dashboard.',
        color: 'from-vitality-400 to-vitality-600',
    },
    {
        icon: Utensils,
        title: 'DietonAI™ Tracking',
        description: 'Auto-detect meals from photos. Nutritional breakdown without the friction.',
        color: 'from-coral-400 to-coral-600',
    },
    {
        icon: HeartPulse,
        title: 'Biomarker Integration',
        description: 'Connect lab results, wearables, and vitals. One unified health timeline.',
        color: 'from-primary-300 to-primary-500',
    },
    {
        icon: Zap,
        title: 'Preventative Nudges',
        description: 'Not just data—get timely, personalized recommendations that prevent issues.',
        color: 'from-vitality-300 to-vitality-500',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

export function Features() {
    return (
        <section className="relative py-32 overflow-hidden bg-[#070b14]">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 via-transparent to-mind-900/10" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vitality-400/10 border border-vitality-400/20 mb-6">
                        <Clock className="w-4 h-4 text-vitality-400" />
                        <span className="text-sm text-vitality-300">Performant Longevity</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Your Health,{' '}
                        <span className="bg-gradient-to-r from-primary-400 to-vitality-400 bg-clip-text text-transparent">
                            Finally Observable
                        </span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Stop guessing. Start knowing. Your passport captures everything,
                        connects the dots, and prevents issues before they begin.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-300"
                        >
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}>
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-[0.03]`} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
