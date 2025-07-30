import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://djtbag.ie'),
  title: { default: 'DJ T-BAG', template: '%s | djtbag.ie' },
  description: 'Professional DJ services and event vibes by DJ T-BAG – your go-to DJ for parties, weddings, and corporate events.',
  authors: [{ name: 'DJ T-BAG', url: 'https://djtbag.ie' }],
  icons: { icon: '/favicon.ico', shortcut: '/favicon.ico', apple: '/logo.png' },
  openGraph: {
    title: 'djtbag.ie',
    description: 'Professional DJ services and event vibes by DJ T-BAG',
    url: 'https://djtbag.ie',
    siteName: 'djtbag.ie',
    images: [
      { url: '/logo.png', width: 800, height: 600, alt: 'DJ T-BAG Logo' },
    ],
    locale: 'en_IE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'djtbag.ie',
    description: 'Professional DJ services and event vibes by DJ T-BAG',
    site: '@djtbag',
    creator: '@djtbag',
    images: ['https://djtbag.ie/logo.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#9B177E',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
