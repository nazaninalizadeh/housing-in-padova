import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ListingDetail(){
  const { id } = useParams();
  const [listing, setListing] = useState(null)
  useEffect(()=>{ if(id) axios.get(import.meta.env.VITE_API_URL + '/listings/' + id).then(r=>setListing(r.data)).catch(()=>{}) },[id])
  if(!listing) return <div>Loading...</div>
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">{listing.title}</h1>
      <img src={listing.photos?.[0] || '/placeholder.png'} className="w-full h-96 object-cover mt-4" />
      <p className="mt-4">{listing.description}</p>
    </div>
  )
}
