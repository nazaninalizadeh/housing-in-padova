import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Home(){
  const { t } = useTranslation();
  return (
    <div className="max-w-6xl mx-auto">
      <section className="h-80 bg-gradient-to-r from-green-50 to-white rounded-lg flex items-center p-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{t('welcome')}</h1>
          <p className="mt-4 text-gray-600">Premium rentals for students, workers and families.</p>
        </div>
        <div className="ml-auto w-1/3">
          <div className="bg-white p-4 rounded shadow">
            <input placeholder="Area" className="w-full p-2 border rounded" />
            <div className="flex mt-2">
              <select className="p-2 border rounded w-1/2 mr-2"><option>Any type</option></select>
              <button className="p-2 bg-green-700 text-white rounded">{t('search')}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold">Latest Listings</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="border rounded p-4">Listing card</div>
          <div className="border rounded p-4">Listing card</div>
          <div className="border rounded p-4">Listing card</div>
        </div>
      </section>
    </div>
  )
}
