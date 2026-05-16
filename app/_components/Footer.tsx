import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.png"
              alt="DJ T-BAG – Sound Equipment & DJ Hire Ireland"
              width={120}
              height={80}
              className="rounded-md"
            />
            <p className="text-sm text-gray-400 max-w-xs">
              Professional DJ, PA system, karaoke, lighting and sound equipment hire for events
              across Ireland. Delivery and setup available.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#9B177E] mb-4">
              Quick Links
            </h2>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/#products" className="hover:text-white transition">Equipment Hire</a></li>
              <li><a href="/#events" className="hover:text-white transition">Events & Services</a></li>
              <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><a href="/#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#9B177E] mb-4">
              Contact
            </h2>
            <address className="not-italic space-y-2 text-sm text-gray-400 mb-6">
              <p>
                <a href="tel:+353899640681" className="hover:text-white transition">
                  +353 899 640 681
                </a>
              </p>
              <p>
                <a href="mailto:info@dj-tbag.ie" className="hover:text-white transition">
                  info@dj-tbag.ie
                </a>
              </p>
              <p>Available 24/7</p>
            </address>

            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#9B177E] mb-4">
              Legal
            </h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/policies#privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policies#terms" className="hover:text-white transition">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/policies#cookies" className="hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/policies#delivery" className="hover:text-white transition">
                  Delivery &amp; Setup Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-gray-600">
          <p>&copy; {currentYear} DJ T-BAG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
