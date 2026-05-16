# SEO & Responsive Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve technical SEO, on-page SEO, local SEO, semantic HTML, responsiveness, and accessibility across the DJ T-BAG Next.js site — without touching any animation code (GSAP, Framer Motion, Lenis).

**Architecture:** All changes are isolated to metadata exports, component JSX/Tailwind classes, a new JSON-LD component, and a new `robots.txt` file. No new pages, no new dependencies, no animation code touched. Next.js App Router `metadata` API handles title/description/canonical/OG/Twitter. JSON-LD is injected via a `<script>` tag in `layout.tsx`. Heading hierarchy and CTA text fixes are pure JSX edits.

**Tech Stack:** Next.js 15 App Router, React 19, Tailwind CSS v4, TypeScript

**Constraint:** Do NOT modify any of the following: GSAP logic in `Hero.tsx`, Framer Motion logic in `Navbar.tsx`, Lenis logic in `ScrollWrapper.tsx`, scroll-to-top logic in `ScrollToTopButton.tsx`.

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `app/layout.tsx` | Modify | Fix metadata (title, desc, canonical, OG, Twitter), add JSON-LD script, add robots meta |
| `app/_components/Hero.tsx` | Modify | Demote H1 → H2 (it's a tagline, not the page's primary H1) |
| `app/_components/Products.tsx` | Modify | Fix H1 → H2, fix CTA "Find More" → "View All Equipment", add `loading="lazy"` to product images, add `<section>` semantic wrapper |
| `app/_components/Events.tsx` | Modify | Fix H1 → H2, add `<section>` semantic wrapper, add `loading="lazy"` to event images |
| `app/_components/Contact.tsx` | Modify | Replace Gmail with domain email, fix first/last name fields to stack on mobile (already uses `sm:grid-cols-2` — verify it collapses correctly), add `<address>` semantic wrapper |
| `app/_components/Navbar.tsx` | Modify | Fix logo alt text to be descriptive |
| `app/page.tsx` | Modify | Add single true H1 (brand/service headline), wrap in `<main>` |
| `app/products/page.tsx` | Modify | Fix H1 (it can keep its own H1 since it's a separate page), add `loading="lazy"` to images, fix `h-[100vh]` overflow issue |
| `app/globals.css` | Modify | Add `max-width: 100%; overflow-x: hidden` safeguard on body, add responsive image rule |
| `public/robots.txt` | Create | Allow all crawlers, point to sitemap |

---

## Task 1: Fix metadata in `layout.tsx` — title, description, canonical, OG, Twitter, robots

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace the `metadata` export and add JSON-LD**

Open `app/layout.tsx` and replace the entire file content with:

```tsx
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dj-tbag.ie'),
  title: {
    default: 'DJ T-BAG | DJ, PA System & Sound Equipment Hire in Ireland',
    template: '%s | DJ T-BAG',
  },
  description:
    'DJ, PA system, karaoke, lighting and sound equipment hire for weddings, parties and corporate events across Ireland. Delivery and setup available.',
  authors: [{ name: 'DJ T-BAG', url: 'https://www.dj-tbag.ie' }],
  alternates: {
    canonical: 'https://www.dj-tbag.ie/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'DJ T-BAG | DJ, PA System & Sound Equipment Hire in Ireland',
    description:
      'DJ, PA system, karaoke, lighting and sound equipment hire for weddings, parties and corporate events across Ireland.',
    url: 'https://www.dj-tbag.ie/',
    siteName: 'DJ T-BAG',
    images: [{ url: '/logo.png', width: 800, height: 600, alt: 'DJ T-BAG Logo' }],
    locale: 'en_IE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DJ T-BAG | DJ, PA System & Sound Equipment Hire in Ireland',
    description:
      'DJ, PA system, karaoke, lighting and sound equipment hire for weddings, parties and corporate events across Ireland.',
    site: '@djtbag',
    creator: '@djtbag',
    images: ['https://www.dj-tbag.ie/logo.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#9B177E',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'DJ T-BAG',
  url: 'https://www.dj-tbag.ie/',
  telephone: '+353899640681',
  email: 'info@dj-tbag.ie',
  logo: 'https://www.dj-tbag.ie/logo.png',
  image: 'https://www.dj-tbag.ie/logo.png',
  description:
    'DJ, PA system, karaoke, lighting and sound equipment hire for weddings, parties and corporate events across Ireland.',
  serviceType: [
    'DJ Hire',
    'PA System Hire',
    'Sound Equipment Hire',
    'Karaoke Hire',
    'Audio Visual Hire',
    'Lighting Hire',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Ireland',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify the build compiles**

```bash
cd "c:/Users/miwar/Desktop/WEB WORK/dj_t.bag"
pnpm build 2>&1 | tail -20
```

Expected: no TypeScript errors, build succeeds or only pre-existing warnings.

- [ ] **Step 3: Verify metadata in browser source**

```bash
pnpm dev
```

Open `view-source:http://localhost:3000` and confirm:
- `<title>DJ T-BAG | DJ, PA System &amp; Sound Equipment Hire in Ireland</title>` is present
- `<meta name="description"` with the new text is present
- `<link rel="canonical" href="https://www.dj-tbag.ie/" />` is present
- `<script type="application/ld+json">` block is present

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "seo: fix metadata, add canonical, JSON-LD structured data, robots directives"
```

---

## Task 2: Create `public/robots.txt`

**Files:**
- Create: `public/robots.txt`

- [ ] **Step 1: Create the file**

```
User-agent: *
Allow: /

Sitemap: https://www.dj-tbag.ie/sitemap.xml
```

- [ ] **Step 2: Verify it's served**

```bash
pnpm dev
```

Visit `http://localhost:3000/robots.txt` — confirm the content appears.

- [ ] **Step 3: Commit**

```bash
git add public/robots.txt
git commit -m "seo: add robots.txt"
```

---

## Task 3: Fix H1 hierarchy — demote H1s in `Hero.tsx` and `Events.tsx`, keep one true H1 in `Products.tsx`, add page-level H1 in `page.tsx`

**Context:** The audit found 3 H1 tags across the homepage. The rule: exactly one H1 per page. Currently:
- `Hero.tsx` line 76: `<h1>Sound Equipment Hire</h1>` — this is a visual tagline, demote to `<h2>`
- `Products.tsx` line 14: `<h1>Powering Every Event</h1>` — this is a section heading, demote to `<h2>`  
- `Events.tsx` line 9: `<h1>Everything we can help you with</h1>` — section heading, demote to `<h2>`

The single true H1 will be added to `page.tsx` as a visually hidden (sr-only) tag so it doesn't break the visual design, giving Google a clear primary keyword signal.

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/_components/Hero.tsx` (JSX only — no animation code)
- Modify: `app/_components/Products.tsx` (JSX only)
- Modify: `app/_components/Events.tsx` (JSX only)

- [ ] **Step 1: Add a visually-hidden H1 to `page.tsx`**

Replace the contents of `app/page.tsx` with:

```tsx
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import SmoothScroll from "./_components/ScrollWrapper";
import Events from "./_components/Events";
import Contact from "./_components/Contact";
import ScrollToTopButton from "./_components/ScrollToTopButton";

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollToTopButton />
      <div className="peralta-font bg-white">
        <h1 className="sr-only">
          DJ T-BAG – DJ, PA System &amp; Sound Equipment Hire in Ireland
        </h1>
        <Navbar />
        <main>
          <Hero />
          <Products />
          <Events />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
}
```

- [ ] **Step 2: Demote H1 → H2 in `Hero.tsx`**

In `app/_components/Hero.tsx`, change only line 76. Find:

```tsx
          <h1 className="text-[6vh] font-bold md:text-[6vh] lg:text-[13vh] text-white uppercase drop-shadow-lg">
            Sound Equipment Hire
          </h1>
```

Replace with:

```tsx
          <h2 className="text-[6vh] font-bold md:text-[6vh] lg:text-[13vh] text-white uppercase drop-shadow-lg">
            Sound Equipment Hire
          </h2>
```

Do NOT touch any other line in this file.

- [ ] **Step 3: Demote H1 → H2 in `Products.tsx`**

In `app/_components/Products.tsx`, find line 14:

```tsx
        <h1 className="uppercase text-black font-bold text-[5vh] md:text-[6vh] mb-4">
          Powering Every Event
        </h1>
```

Replace with:

```tsx
        <h2 className="uppercase text-black font-bold text-[5vh] md:text-[6vh] mb-4">
          Powering Every Event
        </h2>
```

- [ ] **Step 4: Demote H1 → H2 in `Events.tsx`**

In `app/_components/Events.tsx`, find line 9:

```tsx
                <h1 className=' uppercase mb-3 font-bold text-black text-center text-[6vh] md:text-[8vh]'>Everything we can help you with</h1>
```

Replace with:

```tsx
                <h2 className='uppercase mb-3 font-bold text-black text-center text-[6vh] md:text-[8vh]'>Everything we can help you with</h2>
```

- [ ] **Step 5: Verify heading hierarchy**

```bash
pnpm dev
```

Open `http://localhost:3000`, open DevTools, run in the console:

```js
document.querySelectorAll('h1,h2,h3').forEach(el => console.log(el.tagName, el.textContent.trim().slice(0,50)))
```

Expected output — exactly ONE H1, rest H2/H3:
```
H1  DJ T-BAG – DJ, PA System & Sound Equipment Hire in Ireland
H2  Sound Equipment Hire
H2  Audio / Visual Hire Specialists
H2  Powering Every Event
H2  Everything we can help you with
H2  Get in touch
```

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx app/_components/Hero.tsx app/_components/Products.tsx app/_components/Events.tsx
git commit -m "seo: fix H1 hierarchy — one H1 per page, demote section headings to H2"
```

---

## Task 4: Fix Contact section — replace Gmail, improve semantic HTML, fix mobile form layout

**Files:**
- Modify: `app/_components/Contact.tsx`

- [ ] **Step 1: Replace Gmail and add semantic `<address>` wrapper**

In `app/_components/Contact.tsx`, replace the contact info block. Find:

```tsx
            <div className="mt-10 space-y-6 text-base text-gray-600">
              <div>
                <p className="font-semibold">Phone:</p>
                <p className="mt-1">
                  <a
                    href="tel:+353899640681"
                    className="text-gray-600 hover:underline"
                  >
                    +353 899 640 681
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="mt-1">
                  <a
                    href="mailto:tharindu.nes@gmail.com"
                    className="text-gray-600 hover:underline"
                  >
                    tharindu.nes@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold">Working hours:</p>
                <p className="mt-1">24 hours / 7 days a week</p>
              </div>
            </div>
```

Replace with:

```tsx
            <address className="mt-10 space-y-6 text-base text-gray-600 not-italic">
              <div>
                <p className="font-semibold">Phone:</p>
                <p className="mt-1">
                  <a
                    href="tel:+353899640681"
                    className="text-gray-600 hover:underline"
                  >
                    +353 899 640 681
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="mt-1">
                  <a
                    href="mailto:info@dj-tbag.ie"
                    className="text-gray-600 hover:underline"
                  >
                    info@dj-tbag.ie
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold">Working hours:</p>
                <p className="mt-1">24 hours / 7 days a week</p>
              </div>
            </address>
```

- [ ] **Step 2: Fix the "Get in touch" heading — demote to H2**

In `app/_components/Contact.tsx`, find:

```tsx
            <h2 className="text-[6vh] md:text-[8vh] font-bold text-black uppercase">
              Get in touch
            </h2>
```

This is already an H2 — no change needed. Confirm it reads `<h2>` and move on.

- [ ] **Step 3: Verify email shows correctly in browser**

```bash
pnpm dev
```

Scroll to contact section at `http://localhost:3000/#contact`. Confirm:
- Email shown is `info@dj-tbag.ie`
- `mailto:` link targets `info@dj-tbag.ie`
- First/Last name fields sit side by side on desktop, stack to single column on mobile (< 640px — the existing `sm:grid-cols-2` already handles this correctly, just verify)

- [ ] **Step 4: Commit**

```bash
git add app/_components/Contact.tsx
git commit -m "seo: replace gmail with domain email, add address semantic element"
```

---

## Task 5: Fix CTA text — "Find More" → descriptive labels

**Context:** The audit flagged generic "Find More" link text as weak for SEO and accessibility. Two occurrences:
1. `Hero.tsx` line 84: button inside `Link href="/#products"` — change to "View Our Equipment"
2. `Products.tsx` line 52: `Link href="/products"` — change to "View All Equipment"

**Files:**
- Modify: `app/_components/Hero.tsx` (text only — no animation code touched)
- Modify: `app/_components/Products.tsx`

- [ ] **Step 1: Fix CTA in `Hero.tsx`**

In `app/_components/Hero.tsx`, find:

```tsx
            <Link href="/#products">
              <button className="text-[2vh] md:text-[3vh] px-6 py-2 rounded-3xl border backdrop-blur-lg bg-[#9B177E] hover:textblack text-white block text-center">
                Find More
              </button>
            </Link>
```

Replace with:

```tsx
            <Link href="/#products">
              <button className="text-[2vh] md:text-[3vh] px-6 py-2 rounded-3xl border backdrop-blur-lg bg-[#9B177E] hover:textblack text-white block text-center">
                View Our Equipment
              </button>
            </Link>
```

- [ ] **Step 2: Fix CTA in `Products.tsx`**

In `app/_components/Products.tsx`, find:

```tsx
          <Link href="/products">
            <button className="text-[2vh] md:text-[2.4vh] text-black underline hover:text-gray-800 transition">
              Find More
            </button>
          </Link>
```

Replace with:

```tsx
          <Link href="/products">
            <button className="text-[2vh] md:text-[2.4vh] text-black underline hover:text-gray-800 transition">
              View All Equipment
            </button>
          </Link>
```

- [ ] **Step 3: Verify in browser**

```bash
pnpm dev
```

At `http://localhost:3000`, confirm:
- Hero CTA reads "View Our Equipment"
- Products section CTA reads "View All Equipment"

- [ ] **Step 4: Commit**

```bash
git add app/_components/Hero.tsx app/_components/Products.tsx
git commit -m "seo: replace generic 'Find More' CTA text with descriptive labels"
```

---

## Task 6: Add semantic section wrappers and `loading="lazy"` to images

**Context:** The `Events.tsx` and `Products.tsx` components use bare `<div>` containers with `id` anchors. Wrapping them in `<section>` with `aria-labelledby` improves semantics. Product/event images below the fold should lazy-load.

**Files:**
- Modify: `app/_components/Products.tsx`
- Modify: `app/_components/Events.tsx`

- [ ] **Step 1: Wrap Products in `<section>` and add lazy loading**

Replace the entire content of `app/_components/Products.tsx` with:

```tsx
import React from 'react'
import { products } from './ProductsList'
import Link from 'next/link'

export default function ProductsList() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="relative peralta-font w-full bg-white flex flex-col items-center py-[10%] md:py-[5%] px-4 md:px-8"
    >
      {/* Text block */}
      <div className="text-center max-w-[80%] mb-12">
        <h2
          id="products-heading"
          className="uppercase text-black font-bold text-[5vh] md:text-[6vh] mb-4"
        >
          Powering Every Event
        </h2>
        <p className="text-[2.2vh] text-black md:text-[2.5vh]">
          From PA systems and lighting to full music setups, we provide professional sound solutions
          for events big and small – weddings, launches, shows, conferences, and more. <br />
          Need great sound at the right price? Get in touch for a quick quote. Delivery available.
        </p>
      </div>

      {/* Grid of Products */}
      <div className="w-[80%] mt-10% md:mt-[5%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                loading="lazy"
                className="w-full h-[250px] object-fill rounded-md bg-gray-200 group-hover:opacity-80 transition"
              />
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    <a href={product.href} className="relative z-10">
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{product.future}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-end mt-6">
          <Link href="/products">
            <button className="text-[2vh] md:text-[2.4vh] text-black underline hover:text-gray-800 transition">
              View All Equipment
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Wrap Events in `<section>` and add lazy loading**

Replace the entire content of `app/_components/Events.tsx` with:

```tsx
import React from 'react'
import { events } from './EventsList'

const Events = () => {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="relative peralta-font w-full h-auto bg-white flex flex-col justify-between items-center my-[10%] md:my-[5%]"
    >
      <div className="flex flex-col justify-between items-center w-[80%] h-auto my-[3%]">
        <h2
          id="events-heading"
          className="uppercase mb-3 font-bold text-black text-center text-[6vh] md:text-[8vh]"
        >
          Everything we can help you with
        </h2>
      </div>

      <div className="w-[80%]">
        <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 xl:gap-x-6">
          {events.map((event) => (
            <div key={event.id} className="group relative">
              <img
                alt={event.imageAlt}
                src={event.imageSrc}
                loading="lazy"
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-90"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-2xl text-gray-700">
                    <a href={event.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {event.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-md text-gray-800">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
```

- [ ] **Step 3: Verify in browser**

```bash
pnpm dev
```

Open DevTools → Elements. Confirm:
- Products block is a `<section id="products">` element
- Events block is a `<section id="events">` element
- Product images have `loading="lazy"` attribute
- No visual regressions

- [ ] **Step 4: Commit**

```bash
git add app/_components/Products.tsx app/_components/Events.tsx
git commit -m "seo: add section semantics, aria-labelledby, lazy loading to product/event images"
```

---

## Task 7: Fix Navbar logo alt text

**Files:**
- Modify: `app/_components/Navbar.tsx` (JSX only — no animation code)

- [ ] **Step 1: Fix logo alt text**

In `app/_components/Navbar.tsx`, find:

```tsx
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={100}
            className="ml-12"
          />
```

Replace with:

```tsx
          <Image
            src="/logo.png"
            alt="DJ T-BAG – Sound Equipment & DJ Hire Ireland"
            width={150}
            height={100}
            className="ml-12"
          />
```

- [ ] **Step 2: Verify**

```bash
pnpm dev
```

Open DevTools, inspect the logo `<img>` tag. Confirm `alt="DJ T-BAG – Sound Equipment & DJ Hire Ireland"`.

- [ ] **Step 3: Commit**

```bash
git add app/_components/Navbar.tsx
git commit -m "seo: improve logo alt text for SEO and accessibility"
```

---

## Task 8: Fix global CSS — prevent horizontal overflow, ensure fluid images

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Add overflow safeguards and fluid image rule**

Replace the entire content of `app/globals.css` with:

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}

img,
video,
canvas,
iframe {
  max-width: 100%;
}

.peralta-font {
  font-family: "Peralta", serif;
  font-weight: 400;
  font-style: normal;
}
```

- [ ] **Step 2: Verify no horizontal scroll at 320px**

```bash
pnpm dev
```

Open DevTools → Toggle device toolbar → set width to 320px. Scroll horizontally — there should be none. Check at 375px and 414px as well.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "responsive: add overflow-x: hidden and fluid img/video/canvas rules"
```

---

## Task 9: Fix `products/page.tsx` — remove fixed `h-[100vh]` that causes overflow on small screens

**Context:** `app/products/page.tsx` has `h-[100vh]` on its container which clips content when there are many products. Replace with `min-h-screen`.

**Files:**
- Modify: `app/products/page.tsx`

- [ ] **Step 1: Replace `h-[100vh]` with `min-h-screen`**

Replace the entire content of `app/products/page.tsx` with:

```tsx
import React from 'react'
import { products } from '../_components/ProductsList'
import Link from 'next/link'
import GoBack from '../_components/GoBack'

export default function ProductsPage() {
  return (
    <div>
      <GoBack />
      <main className="peralta-font w-full min-h-screen bg-white flex flex-col items-center my-[3%] px-4">
        <div className="flex flex-col items-center w-full max-w-[80%] my-[3%] text-center">
          <h1 className="uppercase mb-3 text-[8vh]">Powering Every Event</h1>
          <p className="text-[3vh]">
            From PA systems and lighting to full music setups, we provide professional sound
            solutions for events big and small — weddings, launches, shows, conferences, and more.
            Need great sound at the right price? Get in touch for a quick quote. Delivery available.
          </p>
        </div>
        <div className="w-full max-w-[80%]">
          <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  loading="lazy"
                  className="aspect-square w-full rounded-md bg-gray-200 object-fill group-hover:opacity-75 lg:aspect-auto lg:h-90"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-2xl text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-md text-gray-800">{product.future}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
```

- [ ] **Step 2: Verify products page at mobile widths**

```bash
pnpm dev
```

Visit `http://localhost:3000/products`. In DevTools at 375px, confirm:
- All 6 products are visible and not clipped
- No horizontal scroll

- [ ] **Step 3: Commit**

```bash
git add app/products/page.tsx
git commit -m "responsive: fix products page overflow — replace h-[100vh] with min-h-screen"
```

---

## Self-Review

**Spec coverage check:**

| Requirement | Task |
|---|---|
| Strong title tag | Task 1 |
| Meta description ~150 chars | Task 1 |
| Canonical URL | Task 1 |
| Viewport tag | Task 1 (via `viewport` export) |
| Open Graph tags | Task 1 |
| Twitter card tags | Task 1 |
| Favicon/apple-touch-icon | Task 1 (already existed, preserved) |
| One H1 on homepage | Task 3 |
| H2 for major sections | Task 3, 6 |
| Descriptive link text | Task 5 |
| Landmark regions (main, section) | Task 3 (main), Task 6 (section) |
| JSON-LD LocalBusiness/ProfessionalService | Task 1 |
| robots meta tag | Task 1 |
| Replace Gmail with domain email | Task 4 |
| `<address>` semantic wrapper | Task 4 |
| `loading="lazy"` for below-fold images | Task 6, 9 |
| No horizontal overflow at any breakpoint | Task 8, 9 |
| Fluid images (`max-width: 100%`) | Task 8 |
| robots.txt | Task 2 |
| Logo alt text | Task 7 |
| Products page `h-[100vh]` overflow fix | Task 9 |

**Animations untouched:** GSAP in `Hero.tsx` (lines 15–41), Framer Motion in `Navbar.tsx` (AnimatePresence/motion.div), Lenis in `ScrollWrapper.tsx`, scroll state in `ScrollToTopButton.tsx` — none of these are modified in any task.

**Placeholder scan:** No TBDs, no "handle edge cases", all code blocks are complete.

**Type consistency:** No new types introduced. All component signatures unchanged.
