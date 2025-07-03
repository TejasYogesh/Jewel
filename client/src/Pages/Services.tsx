import React from 'react'
import Navbar from '@/components/Navbar'

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Nearby Jewellery Shops</h2>
        <div className="w-full max-w-4xl h-[500px] rounded-lg shadow-2xl overflow-hidden border border-blue-300">
          <iframe
            title="Hassan Jewellery Shops"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=jewellery+shop+near+Hassan,+Karnataka&output=embed"
          ></iframe>
        </div>
        <p className="mt-6 text-gray-600 text-center text-lg">
          Showing jewellery shops near Hassan, Karnataka.
        </p>
      </div>
    </>
  )
}