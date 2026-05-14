import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Listings(){
  const [listings, setListings] = useState([])
  useEffect(()=>{ axios.get(import.meta.env.VITE_API_URL + '/listings').then(r=>setListings(r.data)).catch(()=>{}) },[])
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold">Listings</h1>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {listings.length ? listings.map(l => (
          <div key={l._id} className="border rounded p-4">
            <img src={l.photos?.[0] || '/placeholder.png'} alt="" className="h-40 w-full object-cover" />
            <h3 className="mt-2 font-semibold">{l.title}</h3>
            <p className="text-sm">{l.area} - €{l.price}</p>
          </div>
        )) : <p>No listings</p>}
      </div>
    </div>
  )
}
