'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import GoBack from '../_components/GoBack'
import Footer from '../_components/Footer'

const sections = [
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'terms', label: 'Terms & Conditions' },
  { id: 'cookies', label: 'Cookie Policy' },
  { id: 'delivery', label: 'Delivery & Setup' },
]

export default function PoliciesPage() {
  const [active, setActive] = useState('privacy')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && sections.find((s) => s.id === hash)) setActive(hash)
  }, [])

  const navigate = (id: string) => {
    setActive(id)
    window.history.replaceState(null, '', `/policies#${id}`)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return (
    <div className="bg-white min-h-screen">
      <GoBack />
      <main className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <h1 className="peralta-font uppercase text-4xl md:text-5xl font-bold text-black mb-4 text-center">
          Policies
        </h1>
        <p className="text-center text-gray-500 mb-10">
          Questions?{' '}
          <a href="/#contact" className="text-[#9B177E] hover:underline">
            Contact us
          </a>
          .
        </p>

        {/* Tab nav */}
        <nav aria-label="Policy sections" className="mb-10">
          {/* Mobile: select */}
          <select
            className="w-full md:hidden border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9B177E]"
            value={active}
            onChange={(e) => navigate(e.target.value)}
          >
            {sections.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>

          {/* Desktop: tab bar */}
          <div className="hidden md:flex gap-2 flex-wrap border-b border-gray-200">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => navigate(s.id)}
                aria-current={active === s.id ? 'page' : undefined}
                className={`px-5 py-3 text-sm font-medium transition border-b-2 -mb-px focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B177E] ${
                  active === s.id
                    ? 'border-[#9B177E] text-[#9B177E]'
                    : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Content panels */}
        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          {active === 'privacy' && (
            <section id="privacy" aria-labelledby="privacy-heading">
              <h2 id="privacy-heading" className="text-2xl font-bold text-black mb-4">Privacy Policy</h2>
              <p><strong>Last updated: {new Date().getFullYear()}</strong></p>
              <p>
                DJ T-BAG (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal
                data in accordance with the General Data Protection Regulation (GDPR) and applicable
                Irish data protection law.
              </p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">What data we collect</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name and contact details (phone, email) submitted via our contact form</li>
                <li>Event details you provide when making an enquiry or booking</li>
                <li>Technical data such as IP address and browser type collected automatically when you visit our site</li>
              </ul>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">How we use your data</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>To respond to your enquiry and process bookings</li>
                <li>To send booking confirmations and relevant event communications</li>
                <li>To improve our website and services</li>
              </ul>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Legal basis</h3>
              <p>
                We process your data on the basis of your consent (contact form submission) and where
                necessary for the performance of a contract (equipment hire bookings).
              </p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Data retention</h3>
              <p>
                We retain your data only as long as necessary to fulfil the purpose for which it was
                collected, or as required by law. Enquiry data is held for up to 2 years.
              </p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Your rights</h3>
              <p>
                Under GDPR you have the right to access, correct, or delete your personal data. You
                may also object to processing or request data portability. To exercise any of these
                rights, contact us at{' '}
                <a href="mailto:info@dj-tbag.ie" className="text-[#9B177E] hover:underline">
                  info@dj-tbag.ie
                </a>
                .
              </p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Third parties</h3>
              <p>
                We use EmailJS to process contact form submissions. No data is sold to third parties.
                We do not use data for automated decision-making or profiling.
              </p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Contact</h3>
              <p>
                For privacy-related queries contact us at{' '}
                <a href="mailto:info@dj-tbag.ie" className="text-[#9B177E] hover:underline">
                  info@dj-tbag.ie
                </a>{' '}
                or call{' '}
                <a href="tel:+353899640681" className="text-[#9B177E] hover:underline">
                  +353 899 640 681
                </a>
                .
              </p>
            </section>
          )}

          {active === 'terms' && (
            <section id="terms" aria-labelledby="terms-heading">
              <h2 id="terms-heading" className="text-2xl font-bold text-black mb-4">Terms &amp; Conditions</h2>
              <p><strong>Last updated: {new Date().getFullYear()}</strong></p>
              <p>
                These Terms &amp; Conditions govern all equipment hire and DJ services provided by
                DJ T-BAG. By placing a booking you agree to these terms.
              </p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Bookings &amp; deposits</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>A deposit is required to confirm your booking. The amount will be confirmed at time of enquiry.</li>
                <li>Bookings are not confirmed until the deposit has been received.</li>
                <li>Full payment is due on or before the day of your event unless otherwise agreed in writing.</li>
              </ul>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Cancellations</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Cancellations more than 14 days before the event: deposit refunded minus a €25 administration fee.</li>
                <li>Cancellations within 14 days of the event: deposit is non-refundable.</li>
                <li>Cancellations on the day of the event: full hire charge may apply.</li>
              </ul>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Equipment responsibility</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>The hirer is responsible for all equipment from the time of delivery until collection.</li>
                <li>Equipment must be kept in a safe, dry, secure location.</li>
                <li>Any damage, loss, or theft during the hire period will be charged to the hirer at full replacement cost.</li>
                <li>Normal wear and tear is accepted.</li>
              </ul>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Use of equipment</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Equipment must only be used for the purpose agreed at time of booking.</li>
                <li>Equipment must not be sub-hired, loaned, or moved to a different venue without prior written consent.</li>
                <li>DJ T-BAG reserves the right to retrieve equipment immediately if these conditions are breached.</li>
              </ul>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Liability</h3>
              <p>
                DJ T-BAG&apos;s liability is limited to the total value of the hire charge paid. We are not
                liable for any indirect or consequential loss arising from equipment failure or
                cancellation beyond our control.
              </p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Governing law</h3>
              <p>
                These terms are governed by the laws of Ireland. Any disputes shall be subject to the
                exclusive jurisdiction of the Irish courts.
              </p>
            </section>
          )}

          {active === 'cookies' && (
            <section id="cookies" aria-labelledby="cookies-heading">
              <h2 id="cookies-heading" className="text-2xl font-bold text-black mb-4">Cookie Policy</h2>
              <p><strong>Last updated: {new Date().getFullYear()}</strong></p>
              <p>
                This Cookie Policy explains how DJ T-BAG uses cookies and similar technologies on{' '}
                <strong>www.dj-tbag.ie</strong>.
              </p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">What are cookies?</h3>
              <p>
                Cookies are small text files placed on your device when you visit a website. They
                help the site function correctly and allow us to understand how visitors use the site.
              </p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Cookies we use</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Type</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Purpose</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3">Essential</td>
                      <td className="px-4 py-3">Required for basic site functionality</td>
                      <td className="px-4 py-3">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Analytics</td>
                      <td className="px-4 py-3">Anonymous visit data to improve the site (if applicable)</td>
                      <td className="px-4 py-3">Up to 2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Managing cookies</h3>
              <p>
                You can control and delete cookies through your browser settings. Disabling cookies
                may affect some site functionality. Most browsers allow you to refuse new cookies,
                accept them selectively, or delete existing ones.
              </p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Third-party cookies</h3>
              <p>
                Our contact form uses EmailJS, which may set its own cookies. We have no control
                over third-party cookies. Please refer to EmailJS&apos;s privacy policy for details.
              </p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Questions</h3>
              <p>
                For questions about our use of cookies, contact us at{' '}
                <a href="mailto:info@dj-tbag.ie" className="text-[#9B177E] hover:underline">
                  info@dj-tbag.ie
                </a>
                .
              </p>
            </section>
          )}

          {active === 'delivery' && (
            <section id="delivery" aria-labelledby="delivery-heading">
              <h2 id="delivery-heading" className="text-2xl font-bold text-black mb-4">Delivery &amp; Setup Policy</h2>
              <p><strong>Last updated: {new Date().getFullYear()}</strong></p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Coverage area</h3>
              <p>
                We deliver and set up throughout Ireland. Delivery is available to all counties.
                A delivery charge may apply for locations outside our local area — this will be
                confirmed at the time of booking.
              </p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">What&apos;s included</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Delivery of all hired equipment to your venue</li>
                <li>Professional setup and positioning of equipment</li>
                <li>Sound check and technical walkthrough</li>
                <li>Collection at an agreed time after your event</li>
              </ul>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Timing</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>We will agree a delivery and collection time with you at the point of booking.</li>
                <li>Please ensure venue access is available at the agreed time.</li>
                <li>Additional waiting time beyond 30 minutes may incur a charge.</li>
              </ul>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Venue requirements</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>The venue must provide adequate access for equipment transportation (ramp, lift, or ground-floor access).</li>
                <li>Sufficient power outlets must be available at the setup location.</li>
                <li>For outdoor events, adequate shelter from rain must be provided for all equipment.</li>
              </ul>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Cancellation of delivery</h3>
              <p>
                If a delivery is cancelled after our crew has departed, a call-out charge of up to
                50% of the hire fee may apply. Please notify us as early as possible if plans change.
              </p>
              <h3 className="text-lg font-semibold text-black mt-6 mb-2">Contact</h3>
              <p>
                To arrange delivery or discuss logistics, call us on{' '}
                <a href="tel:+353899640681" className="text-[#9B177E] hover:underline">
                  +353 899 640 681
                </a>{' '}
                or email{' '}
                <a href="mailto:info@dj-tbag.ie" className="text-[#9B177E] hover:underline">
                  info@dj-tbag.ie
                </a>
                .
              </p>
            </section>
          )}
        </div>

        <div className="mt-16 text-center text-sm text-gray-400">
          <Link href="/faq" className="hover:text-[#9B177E] transition">
            FAQ
          </Link>
          {' · '}
          <a href="/#contact" className="hover:text-[#9B177E] transition">
            Contact Us
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
