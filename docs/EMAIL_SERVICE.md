# Email Collection Service

This landing page uses **[Resend](https://resend.com)** for email collection and automation.

## Why Resend?

- **Modern & Developer-First** — Built for developers with excellent DX
- **Free Tier** — 3,000 emails/month, 100 contacts free
- **Native Next.js Support** — First-class SDK integration
- **GDPR Compliant** — Built-in unsubscribe and compliance features
- **Audience Management** — Built-in contact lists and segmentation

---

## Quick Setup

### 1. Create Resend Account

1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email address

### 2. Get API Key

1. Navigate to **API Keys** in the Resend dashboard
2. Click **Create API Key**
3. Name it `digital-health-passport-prod`
4. Copy the key (starts with `re_`)

### 3. Create Audience (Optional but Recommended)

1. Go to **Audiences** in Resend dashboard
2. Click **Create Audience**
3. Name it `Digital Health Passport Waitlist`
4. Copy the **Audience ID**

### 4. Verify Domain (For Production)

For production emails, verify your domain:

1. Go to **Domains** → **Add Domain**
2. Add `syntropyhealth.com` (or your domain)
3. Add the DNS records Resend provides
4. Wait for verification (usually < 5 minutes)

---

## Environment Variables

Add these to your `.env.local` (development) or Vercel dashboard (production):

```bash
# Required
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Optional (but recommended for production)
RESEND_AUDIENCE_ID=aud_xxxxxxxxxxxx
RESEND_FROM_EMAIL=hello@syntropyhealth.com
```

### Setting in Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) → Your Project → **Settings** → **Environment Variables**
2. Add each variable:
   | Name | Value | Environment |
   |------|-------|-------------|
   | `RESEND_API_KEY` | `re_xxx...` | Production, Preview |
   | `RESEND_AUDIENCE_ID` | `aud_xxx...` | Production, Preview |
   | `RESEND_FROM_EMAIL` | `hello@yourdomain.com` | Production |

3. Redeploy for changes to take effect

---

## API Endpoint

### `POST /api/subscribe`

Subscribes an email to the waitlist.

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response (Success):**
```json
{
  "success": true
}
```

**Response (Error):**
```json
{
  "error": "Valid email required"
}
```

---

## Features

### What Happens on Subscribe

1. ✅ Email validated
2. ✅ Contact added to Resend Audience (if configured)
3. ✅ Welcome email sent with Syntropy branding
4. ✅ User sees success confirmation

### Welcome Email

The welcome email includes:
- Syntropy Health branding
- "Track. Understand. Prevent." messaging
- Bioconscious Living™ theme

---

## Viewing Subscribers

### In Resend Dashboard

1. Go to **Audiences** → Select your audience
2. View all contacts, export as CSV
3. Filter by date, status, etc.

### Export Options

- CSV export for import into other tools
- API access for programmatic retrieval

---

## Advanced: Custom Email Templates

To customize the welcome email, edit:
```
src/app/api/subscribe/route.ts
```

The HTML template is in the `resend.emails.send()` call.

---

## Troubleshooting

### "Failed to subscribe" Error

- Check `RESEND_API_KEY` is set correctly
- Verify API key has send permissions
- Check Resend dashboard for error logs

### Emails Going to Spam

- Verify your domain in Resend
- Use a custom `from` email on your verified domain
- Ensure proper SPF/DKIM records

### Rate Limits

Free tier: 3,000 emails/month, 100 emails/day
If you exceed limits, upgrade or add rate limiting to the API.

---

## Cost

| Tier | Emails/Month | Contacts | Price |
|------|--------------|----------|-------|
| Free | 3,000 | 100 | $0 |
| Pro | 50,000 | Unlimited | $20/mo |
| Enterprise | Unlimited | Unlimited | Custom |

---

## Security Notes

- Never commit API keys to git
- Use environment variables only
- API key should have minimal permissions needed
- Consider rate limiting for production

---

## Links

- [Resend Documentation](https://resend.com/docs)
- [Resend Next.js Guide](https://resend.com/docs/send-with-nextjs)
- [API Reference](https://resend.com/docs/api-reference)
