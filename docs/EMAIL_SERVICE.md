# Email Collection Service

Email collection via [Resend](https://resend.com) — 3,000 emails/month free.

## Setup

### 1. Get Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. **API Keys** → Create key named `digital-health-passport`
3. Copy key (starts with `re_`)

### 2. Configure Environment
Copy `.env.example` to `.env.local`:
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@drenuuzofn.resend.app
# RESEND_AUDIENCE_ID=aud_xxxxxxxxxxxx  # Optional
```

### 3. Sender Domains

| Environment | Domain |
|-------------|--------|
| **Sandbox** | `noreply@drenuuzofn.resend.app` |
| **Production** | `hello@syntropyhealth.bio` (after DNS verification) |

To verify custom domain: **Resend Dashboard** → **Domains** → Add `syntropyhealth.bio` → Add DNS records.

---

## API

### `POST /api/subscribe`

**Request:**
```json
{ "email": "user@example.com" }
```

**Responses:**
| Status | Body |
|--------|------|
| 200 | `{"success": true}` |
| 400 | `{"error": "Valid email required"}` |
| 503 | `{"error": "Email service not configured"}` |

**Flow:**
1. Validate email format
2. Add to Resend Audience (if `RESEND_AUDIENCE_ID` set)
3. Send welcome email with Syntropy branding

---

## Test

```bash
# Local test
curl -X POST http://localhost:3002/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'

# Expected: {"success":true}
```

---

## View Subscribers

**Resend Dashboard** → **Audiences** → Select audience → Export CSV

---

## Customize Welcome Email

Edit `src/app/api/subscribe/route.ts` — HTML template in `resend.emails.send()`.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Failed to subscribe" | Check `RESEND_API_KEY` in env vars |
| Emails to spam | Verify domain, check SPF/DKIM |
| Rate limited | Free: 3k/month, 100/day — upgrade or add throttling |

---

## Links
- [Resend Docs](https://resend.com/docs)
- [Next.js Integration](https://resend.com/docs/send-with-nextjs)
