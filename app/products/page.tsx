// components/ProductsList.tsx
import React from 'react'
import { products } from '../_components/ProductsList'
import Link from 'next/link'
import GoBack from '../_components/GoBack'

export default function ProductsList() {
  return (
    <div className="div">
      <GoBack />
      <div className="peralta-font products w-full h-[100vh]  bg-white flex flex-col justify-between items-center my-[3%]">
        <div className="text flex flex-col justify-between items-center w-[80%] h-auto my-[3%]">
          <h1 className=' uppercase mb-3 text-[8vh]'>Powering Every Event</h1>
          <p className='text-[3vh]'>From PA systems and lighting to full music setups, we provide professional sound solutions for events big and small weddings, launches, shows, conferences, and more.
            Need great sound at the right price? Get in touch for a quick quote. Delivery available.</p>
        </div>
        <div className="container w-[80%] h-[80%]">
          <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
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
      </div>
    </div>
  )
}
