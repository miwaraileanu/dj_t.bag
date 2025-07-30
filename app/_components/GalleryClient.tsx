// components/GalleryClient.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface GalleryClientProps {
  images: string[]
}

export default function GalleryClient({ images }: GalleryClientProps) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <>
      {/* Модальное окно */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>
            <Image
              src={selected}
              alt="Enlarged image"
              width={800}
              height={600}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        </div>
      )}

      {/* Сетка миниатюр */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {images.map((src) => (
          <div
            key={src}
            className="relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelected(src)}
          >
            <Image
              src={src}
              alt="Gallery image"
              width={400}
              height={300}
              className="object-cover w-full h-64"
              priority={false}
            />
          </div>
        ))}
      </section>
    </>
  )
}
