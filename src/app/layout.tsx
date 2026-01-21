import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Longevity & Health Passport | Syntropy Health',
    description: 'Your dietary observability layer for Bioconscious Living™. Track, understand, and prevent health issues before they begin.',
    keywords: ['health passport', 'dietary observability', 'longevity', 'bioconscious', 'DietonAI', 'preventative health'],
    openGraph: {
        title: 'Longevity & Health Passport | Syntropy Health',
        description: 'The last generation to need hospitals for preventable conditions.',
        type: 'website',
        siteName: 'Syntropy Health',
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-[#070b14] text-white antialiased">
                {children}
            </body>
        </html>
    )
}
