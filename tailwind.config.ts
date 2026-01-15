import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eef6ff',
                    100: '#d9ebff',
                    200: '#bcdbff',
                    300: '#8ec5ff',
                    400: '#4A90E2',
                    500: '#3b7dd4',
                    600: '#2d66b8',
                    700: '#275596',
                    800: '#25487b',
                    900: '#233d66',
                },
                vitality: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#7ED321',
                    500: '#65b91a',
                    600: '#4d9613',
                    700: '#3d7412',
                    800: '#345c14',
                    900: '#2c4d14',
                },
                mind: {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#9013FE',
                    500: '#7c0fd6',
                    600: '#6b0eb5',
                    700: '#5a0c96',
                    800: '#4c0b7a',
                    900: '#3f0963',
                },
                coral: {
                    50: '#fff5f5',
                    100: '#ffe3e3',
                    200: '#ffc9c9',
                    300: '#ffa8a8',
                    400: '#FF6B6B',
                    500: '#fa5252',
                    600: '#f03e3e',
                    700: '#e03131',
                    800: '#c92a2a',
                    900: '#a51111',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient': 'gradient 8s linear infinite',
                'flip-open': 'flipOpen 0.8s ease-out forwards',
                'stamp': 'stamp 0.4s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                flipOpen: {
                    '0%': { transform: 'perspective(1000px) rotateY(-90deg)', opacity: '0' },
                    '100%': { transform: 'perspective(1000px) rotateY(0deg)', opacity: '1' },
                },
                stamp: {
                    '0%': { transform: 'scale(2) rotate(-15deg)', opacity: '0' },
                    '70%': { transform: 'scale(0.9) rotate(-15deg)', opacity: '1' },
                    '100%': { transform: 'scale(1) rotate(-15deg)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            backgroundSize: {
                '300%': '300%',
            },
        },
    },
    plugins: [],
}
export default config
