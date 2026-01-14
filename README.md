# Longevity & Health Passport Landing Page

A sleek, modern landing page for Syntropy Health's Digital Health Passport product.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── CTA.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/              # Reusable components
│       └── Button.tsx
└── lib/
    └── utils.ts         # Utility functions
```

## Related Links

- [syntropyhealth.bio](https://syntropyhealth.bio)
- [clinic.healome.one](https://clinic.healome.one)

## Deployment

This project is configured for static export. Run `npm run build` to generate a static site in the `out/` directory.
