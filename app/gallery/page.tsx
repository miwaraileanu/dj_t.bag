import fs from 'fs'
import path from 'path'
import React from 'react'
import GalleryClient from '../_components/GalleryClient' 
import GoBack from '../_components/GoBack'
import ScrollToTopButton from '../_components/ScrollToTopButton'

export default async function GalleryPage() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery')
  let files: string[] = []
  try {
    files = fs.readdirSync(galleryDir)
  } catch (error) {
    console.error('Could not read gallery directory:', error)
  }

  const images = files
    .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file))
    .map((file) => `/gallery/${file}`)

  return (
    <div className="bg-white ">
        <GoBack />
        <ScrollToTopButton />
    <main className="relative flex flex-col items-center min-h-screen p-6 mt-[20%] md:mt-[10%] lg:mt-[5%]">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      {/* Рендерим клиентский компонент */}
      <GalleryClient images={images} />
    </main>
    </div>
  )
}
