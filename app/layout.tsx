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
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
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
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
