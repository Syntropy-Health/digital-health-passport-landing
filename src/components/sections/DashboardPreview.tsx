'use client'

import { motion } from 'framer-motion'
import { Activity, Heart, Pill, Utensils } from 'lucide-react'

const metrics = [
    { label: 'Nutrition Score', value: '82', unit: '/100', icon: Utensils, trend: '+5', color: 'text-vitality-400' },
    { label: 'Med Adherence', value: '94', unit: '%', icon: Pill, trend: 'Consistent', color: 'text-primary-400' },
    { label: 'Active Conditions', value: '3', unit: '', icon: Heart, trend: '-1 resolved', color: 'text-coral-400' },
    { label: 'Symptom Score', value: 'Low', unit: '', icon: Activity, trend: 'Improving', color: 'text-mind-400' },
]

const biomarkers = [
    { name: 'Vitamin D', value: '42', unit: 'ng/mL', status: 'optimal', range: '30-100' },
    { name: 'HbA1c', value: '5.2', unit: '%', status: 'optimal', range: '<5.7' },
    { name: 'Cortisol', value: '18', unit: 'μg/dL', status: 'attention', range: '6-23' },
    { name: 'Omega-3 Index', value: '6.8', unit: '%', status: 'improving', range: '>8' },
]

export function DashboardPreview() {
    return (
        <section className="relative py-20 overflow-hidden bg-[#070b14]">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-900/5 via-transparent to-mind-900/5" />

            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Your Health, <span className="bg-gradient-to-r from-primary-400 to-vitality-400 bg-clip-text text-transparent">Visualized</span>
                    </h2>
                </motion.div>

                {/* Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Browser Chrome */}
                    <div className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl shadow-primary-500/10">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#161b22]">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-coral-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-vitality-500/80" />
                            </div>
                            <div className="flex-1 mx-4">
                                <div className="bg-[#0d1117] rounded-md px-3 py-1 text-xs text-white/40 text-center">
                                    clinic.healome.one/passport
                                </div>
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="p-6 space-y-6">
                            {/* Metrics Row */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {metrics.map((metric, i) => (
                                    <motion.div
                                        key={metric.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
                                    >
                                        <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3 ${metric.color}`}>
                                            <metric.icon className="w-5 h-5" />
                                        </div>
                                        <p className="text-xs text-white/50 mb-1">{metric.label}</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-white">{metric.value}</span>
                                            <span className="text-sm text-white/40">{metric.unit}</span>
                                        </div>
                                        <p className="text-xs text-vitality-400 mt-1">{metric.trend}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Biomarkers Grid */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-sm font-semibold text-white">Biomarker Intelligence</h3>
                                    <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-1 rounded-full">1 needs attention</span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {biomarkers.map((bio, i) => (
                                        <motion.div
                                            key={bio.name}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className={`p-3 rounded-lg border ${bio.status === 'attention'
                                                    ? 'bg-amber-500/5 border-amber-500/20'
                                                    : bio.status === 'improving'
                                                        ? 'bg-primary-500/5 border-primary-500/20'
                                                        : 'bg-vitality-500/5 border-vitality-500/20'
                                                }`}
                                        >
                                            <p className="text-xs text-white/50 mb-1">{bio.name}</p>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-lg font-semibold text-white">{bio.value}</span>
                                                <span className="text-xs text-white/40">{bio.unit}</span>
                                            </div>
                                            <p className="text-[10px] text-white/30 mt-1">Range: {bio.range}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating badges */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="absolute -left-4 top-1/4 hidden lg:block"
                    >
                        <div className="bg-vitality-500/10 border border-vitality-500/20 rounded-lg px-3 py-2 backdrop-blur-sm">
                            <p className="text-xs text-vitality-400 font-medium">+34% cognitive performance</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="absolute -right-4 top-1/3 hidden lg:block"
                    >
                        <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg px-3 py-2 backdrop-blur-sm">
                            <p className="text-xs text-primary-400 font-medium">87% retention rate</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
