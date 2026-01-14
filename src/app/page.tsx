import { CTA } from '@/components/sections/CTA'
import { Features } from '@/components/sections/Features'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Navbar } from '@/components/sections/Navbar'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <section id="features">
                <Features />
            </section>
            <section id="how-it-works">
                <HowItWorks />
            </section>
            <CTA />
            <Footer />
        </main>
    )
}
