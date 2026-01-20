'use client'

import { motion } from 'framer-motion'

const stats = [
    { value: '2,500+', label: 'Pilot Users', sublabel: 'across 10+ startups' },
    { value: '34%', label: 'Cognitive Gain', sublabel: 'avg. performance increase' },
    { value: '$1,920', label: 'Saved/Employee', sublabel: 'annual cost reduction' },
    { value: '87%', label: 'Retention', sublabel: 'after 6 months' },
]

export function TractionStats() {
    return (
        <section className="relative py-16 bg-[#070b14]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-transparent to-vitality-900/10" />

            <div className="relative max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-vitality-400 bg-clip-text text-transparent mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-white mb-0.5">{stat.label}</div>
                            <div className="text-xs text-white/40">{stat.sublabel}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
