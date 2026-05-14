import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const nav = useNavigate()
  const submit=async(e)=>{ e.preventDefault(); try{ const r=await axios.post(import.meta.env.VITE_API_URL + '/auth/login',{email,password}); localStorage.setItem('token', r.data.token); nav('/'); }catch(err){ alert('Login failed') } }
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Login</h2>
      <form onSubmit={submit} className="mt-4 space-y-2">
        <input className="w-full border p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border p-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full bg-green-700 text-white p-2 rounded">Login</button>
      </form>
    </div>
  )
}
