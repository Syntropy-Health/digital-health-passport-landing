'use client'

import { motion } from 'framer-motion'
import { ExternalLink, MessageSquare, Mic, Phone } from 'lucide-react'

const clinicPilots = [
    { name: 'Longevity Medical', location: 'San Francisco, CA', users: '450+', type: 'Longevity Clinic' },
    { name: 'Optimal Health Institute', location: 'Austin, TX', users: '320+', type: 'Functional Medicine' },
    { name: 'BioAge Wellness', location: 'Miami, FL', users: '280+', type: 'Anti-Aging Center' },
]

export function ClinicEmbed() {
    return (
        <section className="relative py-20 overflow-hidden bg-[#070b14]">
            <div className="absolute inset-0 bg-gradient-to-b from-mind-900/5 via-transparent to-primary-900/5" />

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Clinic Portal Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#161b22]">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-coral-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-vitality-500/80" />
                                </div>
                                <div className="flex-1 mx-4">
                                    <div className="bg-[#0d1117] rounded-md px-3 py-1 text-xs text-white/40 text-center">
                                        clinic.healome.one
                                    </div>
                                </div>
                            </div>

                            {/* Chat Interface Preview */}
                            <div className="p-6 space-y-4">
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xs font-bold text-primary-400">AI</span>
                                    </div>
                                    <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                                        <p className="text-sm text-white/80">Good morning! I see your Vitamin D levels improved. How are you feeling after the protocol adjustment?</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 justify-end">
                                    <div className="bg-primary-500/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                                        <p className="text-sm text-white/80">Much better! Energy is up, especially in the afternoons.</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-vitality-500/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xs font-bold text-vitality-400">You</span>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xs font-bold text-primary-400">AI</span>
                                    </div>
                                    <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                                        <p className="text-sm text-white/80">Great progress! I&apos;ll note this for Dr. Chen&apos;s review. Want to log today&apos;s lunch?</p>
                                    </div>
                                </div>

                                {/* Input area */}
                                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                                    <div className="flex-1 bg-white/5 rounded-full px-4 py-2 text-sm text-white/40">
                                        Type or speak...
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 hover:bg-primary-500/30 transition-colors">
                                        <Mic className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Integration badges */}
                        <div className="flex flex-wrap gap-3 mt-4 justify-center">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                <MessageSquare className="w-4 h-4 text-green-400" />
                                <span className="text-xs text-white/60">WhatsApp</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                <Mic className="w-4 h-4 text-primary-400" />
                                <span className="text-xs text-white/60">Voice</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                <Phone className="w-4 h-4 text-mind-400" />
                                <span className="text-xs text-white/60">SMS</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Clinic Pilots */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mind-400/10 border border-mind-400/20 mb-4">
                            <span className="text-xs text-mind-300">Live Integrations</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Powering <span className="bg-gradient-to-r from-mind-400 to-primary-400 bg-clip-text text-transparent">Longevity Clinics</span>
                        </h2>
                        <p className="text-white/60 mb-8">
                            Text or voice—patients interact naturally. Clinicians get structured data.
                        </p>

                        {/* Pilot clinics */}
                        <div className="space-y-3">
                            {clinicPilots.map((clinic, i) => (
                                <motion.div
                                    key={clinic.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                                >
                                    <div>
                                        <h4 className="font-medium text-white">{clinic.name}</h4>
                                        <p className="text-xs text-white/40">{clinic.location} • {clinic.type}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-lg font-bold text-vitality-400">{clinic.users}</span>
                                        <p className="text-xs text-white/40">patients</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <a
                            href="https://clinic.healome.one"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                        >
                            Visit clinic portal <ExternalLink className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
