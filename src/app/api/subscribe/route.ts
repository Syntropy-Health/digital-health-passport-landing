import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
    try {
        const apiKey = process.env.RESEND_API_KEY
        if (!apiKey) {
            console.error('RESEND_API_KEY not configured')
            return NextResponse.json(
                { error: 'Email service not configured' },
                { status: 503 }
            )
        }

        const resend = new Resend(apiKey)
        const { email } = await request.json()

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email required' },
                { status: 400 }
            )
        }

        // Add contact to Resend audience
        const audienceId = process.env.RESEND_AUDIENCE_ID

        if (audienceId) {
            await resend.contacts.create({
                email,
                audienceId,
                unsubscribed: false,
            })
        }

        // Send welcome email
        await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: email,
            subject: 'Welcome to Syntropy Health 🌱',
            html: `
                <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
                    <div style="text-align: center; margin-bottom: 32px;">
                        <h1 style="color: #4A90E2; margin: 0;">Syntropy Health</h1>
                        <p style="color: #7ED321; margin: 8px 0 0;">Bioconscious Living™</p>
                    </div>

                    <h2 style="color: #1a1a1a;">Welcome to Your Health Journey</h2>

                    <p style="color: #444; line-height: 1.6;">
                        You're now on the list for early access to the Digital Health Passport —
                        your personal AI-powered wellness companion.
                    </p>

                    <div style="background: linear-gradient(135deg, #4A90E2 0%, #7ED321 100%); border-radius: 12px; padding: 24px; margin: 24px 0;">
                        <p style="color: white; margin: 0; font-size: 18px; text-align: center;">
                            <strong>Track. Understand. Prevent.</strong>
                        </p>
                    </div>

                    <p style="color: #444; line-height: 1.6;">
                        We'll notify you when we launch. In the meantime, follow our journey toward
                        making this the last generation to suffer from preventable conditions.
                    </p>

                    <p style="color: #888; font-size: 14px; margin-top: 40px;">
                        — The Syntropy Health Team
                    </p>
                </div>
            `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Subscribe error:', error)
        return NextResponse.json(
            { error: 'Failed to subscribe' },
            { status: 500 }
        )
    }
}
