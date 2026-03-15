# Minimal Portfolio

A Next.js 16 portfolio app migrated from Vercel to Replit.

## Stack

- **Framework**: Next.js 16 (App Router) with Turbopack
- **Styling**: Tailwind CSS + shadcn/ui (Radix UI)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Nodemailer / SendGrid
- **Analytics**: Vercel Analytics, Google Analytics

## Running the App

The dev server runs on port 5000 via the "Start application" workflow:

```
npm run dev   # next dev -p 5000 -H 0.0.0.0
npm run start # next start -p 5000 -H 0.0.0.0
```

## Environment Variables

Copy `.env.copy` as a reference. Set these as Replit secrets:

| Variable | Description |
|---|---|
| `GOOGLE_FORM_LINK` | Pre-filled Google Form URL for contact |
| `GOOGLE_FORM_FIELD_ID_NAME` | Google Form entry ID for name field |
| `GOOGLE_FORM_FIELD_ID_EMAIL` | Google Form entry ID for email field |
| `GOOGLE_FORM_FIELD_ID_MESSAGE` | Google Form entry ID for message field |
| `GOOGLE_FORM_FIELD_ID_SOCIAL` | Google Form entry ID for social field |
| `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` | Google Analytics measurement ID |
| `NEXT_PUBLIC_RESUME_LINK` | Public URL to resume PDF |

## Project Structure

```
app/           # Next.js App Router pages and layouts
  api/         # API routes (contact form, GitHub stars)
  (root)/      # Main page routes
components/    # Reusable React components
config/        # Site configuration
content/       # Markdown content
hooks/         # Custom React hooks
lib/           # Utility functions
providers/     # React context providers
public/        # Static assets
```

## Replit Migration Notes

- Dev/start scripts updated to bind to `0.0.0.0:5000` for Replit's preview proxy
- Package manager: npm (package-lock.json)
