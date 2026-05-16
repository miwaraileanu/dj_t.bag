import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Policies',
  description:
    'Privacy Policy, Terms & Conditions, Cookie Policy and Delivery & Setup Policy for DJ T-BAG sound equipment hire in Ireland.',
  alternates: { canonical: 'https://www.dj-tbag.ie/policies' },
}

export default function PoliciesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
