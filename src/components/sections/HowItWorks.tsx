'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const steps = [
    {
        number: '01',
        title: 'Connect Your Life',
        description: 'Link your apps, wearables, and communication channels. DietonAI meets you where you are.',
        details: ['WhatsApp, Slack, SMS', 'Apple Health, Fitbit, Oura', 'Lab results & medical records'],
    },
    {
        number: '02',
        title: 'Log Naturally',
        description: 'Just talk. Send a voice note, snap a photo, or type a quick message. No forms, no friction.',
        details: ['AI understands context', 'Auto-detects meals & symptoms', 'Learns your language'],
    },
    {
        number: '03',
        title: 'See the Patterns',
        description: 'Your Health Passport reveals connections you never saw. Diet ↔ Energy ↔ Sleep ↔ Mood.',
        details: ['Visual health timeline', 'Correlation insights', 'Trend predictions'],
    },
    {
        number: '04',
        title: 'Act with Confidence',
        description: 'Get personalized nudges at the right time. Small changes, compounding results.',
        details: ['Timely recommendations', 'Evidence-based suggestions', 'Progress tracking'],
    },
]

export function HowItWorks() {
    return (
        <section className="relative py-32 overflow-hidden bg-[#070b14]">
            <div className="absolute inset-0 bg-gradient-to-b from-mind-900/10 via-transparent to-primary-900/10" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        How It{' '}
                        <span className="bg-gradient-to-r from-mind-400 to-primary-400 bg-clip-text text-transparent">
                            Works
                        </span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        From chaos to clarity in four simple steps. Your health data, finally making sense.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Connector line for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
                            )}

                            <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-primary-400/10 hover:border-primary-400/20 transition-colors">
                                <div className="text-5xl font-bold text-white/10 mb-4">{step.number}</div>
                                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                                <p className="text-white/60 mb-4">{step.description}</p>
                                <ul className="space-y-2">
                                    {step.details.map((detail, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-white/50">
                                            <Check className="w-4 h-4 text-vitality-400 flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
