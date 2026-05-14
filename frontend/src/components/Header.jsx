import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Header(){
  const { t, i18n } = useTranslation();
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-semibold text-green-700">Housing In Padova</Link>
        <nav className="space-x-4">
          <Link to="/listings" className="text-gray-700">Listings</Link>
          <Link to="/latest" className="text-gray-700">Latest</Link>
          <Link to="/profile" className="text-gray-700">Profile</Link>
          <select value={i18n.language} onChange={(e)=>i18n.changeLanguage(e.target.value)} className="ml-4">
            <option value="en">English</option>
            <option value="it">Italiano</option>
          </select>
        </nav>
      </div>
    </header>
  )
}
