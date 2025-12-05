import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className='flex justify-between p-4 items-center bg-purple-800'>
        <Link href="/" className='text-2xl font-bold text-white'>URL Shortener</Link>
        <div className='flex gap-4 justify-between '>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/shorten">Shorten</Link>
            <Link href="/shorten" className='bg-purple-400 rounded-lg p-1'>Try Now</Link>
            <Link href="/github" className='bg-purple-400 rounded-lg p-1'>GitHub</Link> 
        </div>
    </nav>
  )
}
