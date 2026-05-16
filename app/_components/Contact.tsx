'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSending(true)

    try {
      await emailjs.sendForm(
        'service_j9gl8ep',
        'template_33b3ug6',
        formRef.current,
        '1ZmyMnH2-PUZvUXHV'
      )
      setIsSent(true)
      formRef.current.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      alert('Failed to send message. Please try again later.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate bg-white px-6 py-[10%] md:py-[5%] sm:py-32 lg:px-8 adlam-font"
    >
      {/* Background gradient blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>

      <div className="mx-auto w-[80%]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left column – Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[6vh] md:text-[8vh] font-bold text-black uppercase">
              Get in touch
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We’d love to hear from you. Reach out to us through any of the
              methods below, or fill out the form.
            </p>

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
          </div>

          {/* Right column – Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-1"
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first_name"
                    type="text"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 shadow-sm outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last_name"
                    type="text"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 shadow-sm outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 shadow-sm outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Country code
                </label>
                <div className="mt-2.5">
                  <select
                    id="country"
                    name="country"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 shadow-sm outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  >
                    <option value="+353">+353</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone_number"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone_number"
                    name="phone_number"
                    type="text"
                    placeholder="12-345-6789"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 shadow-sm outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 shadow-sm outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSending}
                className="w-full px-6 py-2 backdrop-blur-lg hover:text-black border border-white/30 rounded-3xl z-50 shadow-lg text-white bg-[#9B177E]"
              >
                {isSending ? 'Sending...' : isSent ? 'Sent!' : "Let's talk"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
