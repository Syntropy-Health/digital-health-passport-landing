import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Longevity & Health Passport | Syntropy Health',
    description: 'Your AI-powered diet log and health observability layer. Track, understand, and optimize your wellness journey with intelligent insights.',
    keywords: ['health passport', 'diet tracking', 'longevity', 'wellness', 'AI health', 'biomarker tracking'],
    openGraph: {
        title: 'Longevity & Health Passport',
        description: 'Your AI-powered diet log and health observability layer.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-[#0a0a0a] text-white antialiased">
                {children}
            </body>
        </html>
    )
}
