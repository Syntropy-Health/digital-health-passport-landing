# CI/CD Pipeline

Automated deployment via GitHub Actions → Vercel.

## Workflow Triggers

| Trigger | Branch | Environment |
|---------|--------|-------------|
| Push | `main` | Production |
| Push | `dev` | Preview |
| Pull Request | `main` | Preview |
| Manual | Any | Configurable |

## GitHub Secrets Required

Set in **GitHub → Repository → Settings → Secrets → Actions**:

| Secret | Description |
|--------|-------------|
| `VERCEL_TOKEN` | Vercel API token from [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | From `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | From `.vercel/project.json` |

## Vercel Environment Variables

Set in **Vercel → Project → Settings → Environment Variables**:

| Variable | Required | Environments |
|----------|----------|--------------|
| `RESEND_API_KEY` | ✅ | Production, Preview |
| `RESEND_FROM_EMAIL` | ✅ | Production, Preview |
| `RESEND_AUDIENCE_ID` | Optional | Production, Preview |

## Workflow File

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main, dev]
  pull_request:
    branches: [main]
  workflow_dispatch:

env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm install -g vercel@latest
      - run: vercel pull --yes --environment=${{ github.ref == 'refs/heads/main' && 'production' || 'preview' }} --token=${{ secrets.VERCEL_TOKEN }}
      - run: vercel build ${{ github.ref == 'refs/heads/main' && '--prod' || '' }} --token=${{ secrets.VERCEL_TOKEN }}
      - run: vercel deploy --prebuilt ${{ github.ref == 'refs/heads/main' && '--prod' || '' }} --token=${{ secrets.VERCEL_TOKEN }}
```

## Deployment Flow

```
git push origin dev
    ↓
GitHub Actions triggered
    ↓
Vercel CLI pulls environment
    ↓
Next.js build
    ↓
Deploy to Vercel (preview)
    ↓
Create PR: dev → main
    ↓
Merge PR (squash)
    ↓
Deploy to Vercel (production)
```

## Manual Deployment

```bash
# Deploy preview
npx vercel --token=$VERCEL_TOKEN

# Deploy production
npx vercel --prod --token=$VERCEL_TOKEN
```

## Monitoring

- **GitHub Actions**: [Repository → Actions](https://github.com/Syntropy-Health/digital-health-passport-landing/actions)
- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Deployment Logs**: Click any deployment in Vercel dashboard

## Rollback

1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click **⋮** → **Promote to Production**
