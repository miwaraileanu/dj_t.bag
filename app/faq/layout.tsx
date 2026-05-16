import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about DJ T-BAG equipment hire — delivery areas, booking, setup, deposits, cancellations, and more.',
  alternates: { canonical: 'https://www.dj-tbag.ie/faq' },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
