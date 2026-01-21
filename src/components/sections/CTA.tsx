'use client'

import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Loader2, Mail } from 'lucide-react'
import { useState } from 'react'

export function CTA() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus('loading')
        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            })

            if (res.ok) {
                setStatus('success')
                setMessage('Welcome! Check your inbox.')
                setEmail('')
            } else {
                const data = await res.json()
                setStatus('error')
                setMessage(data.error || 'Something went wrong')
            }
        } catch {
            setStatus('error')
            setMessage('Network error. Please try again.')
        }
    }

    return (
        <section className="relative py-32 overflow-hidden bg-[#070b14]">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-mind-900/10 to-[#070b14]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-400/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Join the Bioconscious
                        <br />
                        <span className="bg-gradient-to-r from-primary-400 via-vitality-400 to-mind-400 bg-clip-text text-transparent">
                            Revolution
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
                        Be among the first to own your complete health story. Prevention starts here.
                    </p>

                    {/* Email Input + CTA */}
                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-vitality-500/20 border border-vitality-500/30"
                        >
                            <Check className="w-5 h-5 text-vitality-400" />
                            <span className="text-vitality-300">{message}</span>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                            <div className="relative flex-1 w-full">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full pl-12 pr-4 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
                                />
                            </div>
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full sm:w-auto group whitespace-nowrap"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        Get Early Access
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                            </Button>
                        </form>
                    )}

                    {status === 'error' && (
                        <p className="text-sm text-coral-400 mt-4">{message}</p>
                    )}

                    <p className="text-sm text-white/40 mt-4">
                        No spam. Unsubscribe anytime. We respect your inbox.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
