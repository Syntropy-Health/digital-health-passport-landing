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
            from: process.env.RESEND_FROM_EMAIL || 'hello@syntropyhealth.bio',
            to: email,
            subject: "You're In — Welcome to Syntropy Health ✨",
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); font-family: 'Segoe UI', system-ui, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="min-height: 100vh;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="100%" style="max-width: 520px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; overflow: hidden;">

          <!-- Header with glow effect -->
          <tr>
            <td style="padding: 48px 40px 32px; text-align: center; background: linear-gradient(180deg, rgba(56,189,248,0.1) 0%, transparent 100%);">
              <div style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, rgba(56,189,248,0.2), rgba(34,197,94,0.2)); border-radius: 100px; margin-bottom: 24px;">
                <span style="color: #38bdf8; font-size: 13px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">Early Access</span>
              </div>
              <h1 style="margin: 0; font-size: 32px; font-weight: 300; color: #ffffff; letter-spacing: -0.5px;">
                Welcome to<br>
                <span style="font-weight: 600; background: linear-gradient(135deg, #38bdf8, #22c55e); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Syntropy Health</span>
              </h1>
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <p style="color: #94a3b8; font-size: 16px; line-height: 1.7; margin: 0 0 24px;">
                You've secured your spot. We're building something different — a platform that finally connects your <strong style="color: #e2e8f0;">personal wellness</strong> with your <strong style="color: #e2e8f0;">clinical journey</strong>.
              </p>

              <!-- Feature cards -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 32px 0;">
                <tr>
                  <td style="padding: 20px; background: rgba(56,189,248,0.08); border-radius: 16px; border-left: 3px solid #38bdf8;">
                    <p style="margin: 0 0 4px; color: #38bdf8; font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">Your Data</p>
                    <p style="margin: 0; color: #e2e8f0; font-size: 15px;">Biomarkers, vitals & lifestyle — unified</p>
                  </td>
                </tr>
                <tr><td style="height: 12px;"></td></tr>
                <tr>
                  <td style="padding: 20px; background: rgba(34,197,94,0.08); border-radius: 16px; border-left: 3px solid #22c55e;">
                    <p style="margin: 0 0 4px; color: #22c55e; font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">Your Clinic</p>
                    <p style="margin: 0; color: #e2e8f0; font-size: 15px;">Seamless provider integration</p>
                  </td>
                </tr>
                <tr><td style="height: 12px;"></td></tr>
                <tr>
                  <td style="padding: 20px; background: rgba(168,85,247,0.08); border-radius: 16px; border-left: 3px solid #a855f7;">
                    <p style="margin: 0 0 4px; color: #a855f7; font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">Your AI</p>
                    <p style="margin: 0; color: #e2e8f0; font-size: 15px;">Preventative insights, personalized</p>
                  </td>
                </tr>
              </table>

              <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin: 32px 0 0; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
                We'll reach out when it's your turn. Until then — here's to making this the last generation to need hospitals for preventable conditions.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background: rgba(0,0,0,0.2); text-align: center;">
              <p style="margin: 0; color: #475569; font-size: 13px;">
                <span style="color: #22c55e;">●</span> Syntropy Health · Bioconscious Living™
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
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
