// components/ProductsList.tsx
import React from 'react'
import { products } from './ProductsList'
import Link from 'next/link'

export default function ProductsList() {
  return (
    <div
      id="products"
      className="relative peralta-font w-full bg-white flex flex-col items-center py-12 px-4 md:px-8"
    >
      {/* Text block */}
      <div className="text-center max-w-[80%] mb-12">
        <h1 className="uppercase text-black font-bold text-[5vh] md:text-[6vh] mb-4">
          Powering Every Event
        </h1>
        <p className="text-[2.2vh] text-black md:text-[2.5vh]">
          From PA systems and lighting to full music setups, we provide professional sound solutions
          for events big and small – weddings, launches, shows, conferences, and more. <br />
          Need great sound at the right price? Get in touch for a quick quote. Delivery available.
        </p>
      </div>

      {/* Grid of Products */}
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="w-full h-[250px] object-cover rounded-md bg-gray-200 group-hover:opacity-80 transition"
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
              Find More
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
