import React from 'react'
import Navbar from '@/components/Navbar'

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Nearby Jewellery Shops</h2>
        <div className="w-full max-w-2xl h-96 rounded-lg shadow-lg overflow-hidden border border-blue-200">
          <iframe
            title="Nearby Jewellery Shops"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/search?key=YOUR_GOOGLE_MAPS_API_KEY&q=jewellery+shop+near+me"
          ></iframe>
        </div>
        <p className="mt-4 text-gray-500 text-center">
          Showing jewellery shops near your current location.
        </p>
      </div>
    </>
  )
}