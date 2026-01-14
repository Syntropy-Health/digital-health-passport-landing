'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const baseStyles = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed'

        const variants = {
            primary: 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 focus:ring-primary-500',
            secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 focus:ring-white/50',
            ghost: 'bg-transparent hover:bg-white/5 text-white/70 hover:text-white focus:ring-white/30',
        }

        const sizes = {
            sm: 'px-4 py-2 text-sm gap-1.5',
            md: 'px-6 py-3 text-base gap-2',
            lg: 'px-8 py-4 text-lg gap-2.5',
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </motion.button>
        )
    }
)

Button.displayName = 'Button'

export { Button }
