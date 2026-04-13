# PlutoPay – Next.js Landing Page

A pixel-close recreation of the PlutoPay fintech landing page built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
src/
├── app/                  # Next.js App Router pages + layout
│   ├── layout.tsx        # Root layout (Navbar + Footer)
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles + Tailwind directives
│   └── careers/
│       └── page.tsx      # Careers page
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, TrustedBy, Features, AppStoreBanner
│   └── ui/               # Reusable Button, Badge
├── constants/            # Static data (nav links, features, etc.)
├── lib/                  # Utility functions (cn helper)
└── types/                # TypeScript interfaces
```

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **clsx + tailwind-merge** (className utility)
