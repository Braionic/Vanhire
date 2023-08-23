import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
        <div className='navbar'>
        <h1 className='header-title'><Link to="https://www.google.com">#VANLIFE</Link></h1>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/vans">Vans</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
        </div> 
    </div>
  )
}