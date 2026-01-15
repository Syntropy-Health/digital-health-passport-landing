'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
    className?: string
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, disabled, type = 'button', onClick }, ref) => {
        const baseStyles = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#070b14] disabled:opacity-50 disabled:cursor-not-allowed'

        const variants = {
            primary: 'bg-gradient-to-r from-primary-400 to-primary-500 hover:from-primary-300 hover:to-primary-400 text-white shadow-lg shadow-primary-400/25 hover:shadow-primary-400/40 focus:ring-primary-400',
            secondary: 'bg-white/5 hover:bg-white/10 text-white border border-primary-400/30 hover:border-primary-400/50 focus:ring-primary-400/50',
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
                type={type}
                disabled={disabled}
                onClick={onClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
            >
                {children}
            </motion.button>
        )
    }
)

Button.displayName = 'Button'

export { Button }
