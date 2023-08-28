import React from 'react'
import { NavLink, Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
        <div className='navbar'>
        <h1 className='header-title'><Link to="/">#VANLIFE</Link></h1>
        <nav>
        <ul>
            <li><NavLink className={({isActive})=> isActive? "activelink": null} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? "activelink": null} to="/vans">Vans</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? "activelink": null} to="/host">Host</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? "activelink": null} to="/contact">Contact</NavLink></li>
            <li><NavLink className={({isActive})=> isActive? "activelink": null} to="/about">About</NavLink></li>
            </ul>
        </nav>
        </div> 
    </div>
  )
}