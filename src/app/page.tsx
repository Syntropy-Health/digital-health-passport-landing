import { ClinicEmbed } from '@/components/sections/ClinicEmbed'
import { CTA } from '@/components/sections/CTA'
import { DashboardPreview } from '@/components/sections/DashboardPreview'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { Navbar } from '@/components/sections/Navbar'
import { TractionStats } from '@/components/sections/TractionStats'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <TractionStats />
            <section id="dashboard">
                <DashboardPreview />
            </section>
            <section id="clinic">
                <ClinicEmbed />
            </section>
            <CTA />
            <Footer />
        </main>
    )
}
