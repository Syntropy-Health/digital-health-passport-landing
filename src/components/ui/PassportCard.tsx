'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface PassportCardProps {
    className?: string
}

export function PassportCard({ className = '' }: PassportCardProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className={`perspective-1000 cursor-pointer ${className}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <motion.div
                className="relative w-[280px] h-[380px] preserve-3d"
                animate={{ rotateY: isOpen ? 180 : 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
                {/* Front Cover */}
                <div className="absolute inset-0 backface-hidden passport-cover rounded-lg flex flex-col items-center justify-center p-8">
                    {/* Gold embossed effect */}
                    <div className="absolute inset-4 border border-amber-500/30 rounded pointer-events-none" />
                    <div className="absolute inset-6 border border-amber-500/20 rounded pointer-events-none" />

                    {/* Syntropy Logo */}
                    <div className="w-20 h-20 mb-6 relative">
                        <Image
                            src="/syntropy.svg"
                            alt="Syntropy Health"
                            fill
                            className="object-contain filter brightness-0 invert opacity-90"
                        />
                    </div>

                    {/* Title */}
                    <div className="text-center">
                        <p className="text-amber-400/80 text-xs tracking-[0.3em] uppercase mb-2">Digital</p>
                        <h3 className="text-amber-100 text-xl font-bold tracking-wide">HEALTH</h3>
                        <h3 className="text-amber-100 text-xl font-bold tracking-wide">PASSPORT</h3>
                    </div>

                    {/* Bottom emblem */}
                    <div className="absolute bottom-8 flex items-center gap-2">
                        <div className="w-8 h-[1px] bg-amber-500/40" />
                        <div className="w-2 h-2 rounded-full border border-amber-500/40" />
                        <div className="w-8 h-[1px] bg-amber-500/40" />
                    </div>

                    {/* Hover hint */}
                    <p className="absolute bottom-3 text-[10px] text-amber-500/50 tracking-wider">HOVER TO OPEN</p>
                </div>

                {/* Inside Page (shown when flipped) */}
                <div
                    className="absolute inset-0 backface-hidden passport-page rounded-lg p-6 flex flex-col"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    {/* Header */}
                    <div className="text-center border-b border-stone-300 pb-4 mb-4">
                        <p className="text-[10px] text-stone-500 tracking-[0.2em] uppercase">Syntropy Health</p>
                        <h4 className="text-stone-800 font-bold text-sm tracking-wide">BIOCONSCIOUS PASSPORT</h4>
                    </div>

                    {/* Photo placeholder */}
                    <div className="w-24 h-28 mx-auto mb-4 border-2 border-stone-300 bg-stone-100 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-mind-400 flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">Y</span>
                        </div>
                    </div>

                    {/* Info fields */}
                    <div className="space-y-2 text-xs flex-1">
                        <div className="flex justify-between border-b border-stone-200 pb-1">
                            <span className="text-stone-500">NAME</span>
                            <span className="text-stone-800 font-medium">Your Name</span>
                        </div>
                        <div className="flex justify-between border-b border-stone-200 pb-1">
                            <span className="text-stone-500">STATUS</span>
                            <span className="text-vitality-500 font-medium">BIOCONSCIOUS</span>
                        </div>
                        <div className="flex justify-between border-b border-stone-200 pb-1">
                            <span className="text-stone-500">ISSUED</span>
                            <span className="text-stone-800 font-medium">2025</span>
                        </div>
                    </div>

                    {/* Stamps */}
                    <div className="mt-auto pt-4 flex items-center justify-between">
                        <div className="text-coral-500 text-[10px] font-bold rotate-[-12deg] border-2 border-coral-500 rounded-full px-2 py-1 opacity-70">
                            VERIFIED
                        </div>
                        <div className="text-vitality-600 text-[10px] font-bold rotate-[8deg] border-2 border-vitality-600 rounded px-2 py-1 opacity-70">
                            ACTIVE
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
