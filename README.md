# Digital Health Passport Landing

Syntropy Health's waitlist landing page with email collection.

## Quick Start

```bash
cp .env.example .env.local  # Configure environment
npm install
npm run dev                 # http://localhost:3000
```

## Tech Stack

- **Next.js 14** — App Router, API Routes
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **Resend** — Email collection

## Project Structure

```
src/
├── app/
│   ├── api/subscribe/    # Email subscription endpoint
│   ├── page.tsx          # Landing page
│   └── layout.tsx
├── components/
│   ├── sections/         # Hero, CTA, Footer, etc.
│   └── ui/               # Button, PassportCard
docs/
├── EMAIL_SERVICE.md      # Email setup & API
├── CICD.md               # Deployment pipeline
```

## Documentation

| Doc | Description |
|-----|-------------|
| [docs/EMAIL_SERVICE.md](docs/EMAIL_SERVICE.md) | Resend email setup, API endpoint, testing |
| [docs/CICD.md](docs/CICD.md) | GitHub Actions → Vercel deployment |

## Environment Variables

See `.env.example` for required variables:
- `RESEND_API_KEY` — Resend API key
- `RESEND_FROM_EMAIL` — Sender email address

## Deployment

Automated via GitHub Actions on push to `main` or `dev`. See [docs/CICD.md](docs/CICD.md).
