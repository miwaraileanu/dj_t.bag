'use client'

import { useState } from 'react'
import Link from 'next/link'
import GoBack from '../_components/GoBack'
import Footer from '../_components/Footer'

const faqs = [
  {
    q: 'What areas in Ireland do you deliver to?',
    a: 'We deliver and set up throughout Ireland. Delivery charges may apply depending on distance from our base. Contact us for a precise delivery quote for your location.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We recommend booking as early as possible, especially for weddings and large events. For smaller gigs, a week or two is usually fine. Last-minute bookings are welcome subject to availability — just give us a call.',
  },
  {
    q: 'Do you deliver and set up the equipment, or do I collect it?',
    a: 'All our packages include delivery and setup. We bring the equipment to your venue, set it up, do a sound check, and collect it at an agreed time after your event.',
  },
  {
    q: 'What PA system size do I need for my event?',
    a: 'It depends on your venue size and guest count. As a guide: PA System A suits up to ~50 guests in a small room; PA System B covers up to ~150 guests; Systems C–F are for larger venues, outdoor events, and festivals. We are happy to advise — just describe your event and we will recommend the right package.',
  },
  {
    q: 'Can I plug my own device into your PA systems?',
    a: 'Yes. All our PA systems support connection from a phone, laptop, DJ mixer, or media player via Bluetooth or standard cable inputs. Systems B–F also include microphones and stands.',
  },
  {
    q: 'Do you provide a DJ service, or only equipment hire?',
    a: 'We offer both. You can hire the equipment and operate it yourself, or book our DJ service for weddings, corporate events, parties, discos, and more. Get in touch to discuss what you need.',
  },
  {
    q: 'Do you provide karaoke equipment?',
    a: 'Yes. Our karaoke package includes a flat-screen monitor, professional microphones, and a hard-drive system loaded with thousands of tracks. Lighting and effects can be added to complete the setup.',
  },
  {
    q: 'Is a deposit required to confirm a booking?',
    a: 'Yes, a deposit is required to secure your date. The amount varies by package. Full payment is due before or on the day of your event. See our Terms & Conditions for full details.',
  },
  {
    q: 'What happens if equipment is damaged during my hire period?',
    a: 'The hirer is responsible for the equipment during the hire period. Minor wear is expected, but damage caused by misuse or negligence will be charged. We recommend treating all equipment with care.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Cancellations made more than 14 days before the event will receive a refund of the deposit minus an admin fee. Cancellations within 14 days of the event may forfeit the deposit. Please see our Terms & Conditions for the full policy.',
  },
  {
    q: 'Do your prices include VAT?',
    a: 'All prices listed on our site are inclusive of VAT at the applicable Irish rate.',
  },
  {
    q: 'Can I extend my hire period on the day?',
    a: 'Extensions may be possible subject to availability and are charged at a pro-rata daily rate. Please call us as early as possible if you think you may need extra time.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="bg-white min-h-screen">
      <GoBack />
      <main className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <h1 className="peralta-font uppercase text-4xl md:text-5xl font-bold text-black mb-4 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-500 mb-12">
          Can&apos;t find your answer?{' '}
          <a href="/#contact" className="text-[#9B177E] hover:underline">
            Get in touch
          </a>{' '}
          and we&apos;ll get back to you fast.
        </p>

        <dl className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <dt>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex justify-between items-center text-left px-6 py-5 text-gray-900 font-semibold hover:bg-gray-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B177E]"
                >
                  <span>{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className={`ml-4 shrink-0 text-[#9B177E] text-xl transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
              </dt>
              {openIndex === i && (
                <dd className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </dd>
              )}
            </div>
          ))}
        </dl>

        <div className="mt-16 text-center text-sm text-gray-400">
          <Link href="/policies" className="hover:text-[#9B177E] transition">
            View our Policies
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
