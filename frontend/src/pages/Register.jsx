import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const nav = useNavigate()
  const submit=async(e)=>{ e.preventDefault(); try{ await axios.post(import.meta.env.VITE_API_URL + '/auth/register',{email,password}); nav('/login') }catch(err){ alert('Register failed') } }
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Register</h2>
      <form onSubmit={submit} className="mt-4 space-y-2">
        <input className="w-full border p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border p-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full bg-green-700 text-white p-2 rounded">Register</button>
      </form>
    </div>
  )
}
