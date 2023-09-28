import React from 'react'
import { NavLink, Link, redirect } from 'react-router-dom'
import { auth } from '../api'
import { signOut } from 'firebase/auth'
export default function Header() {
  async function handlelogout(){
    const signoutData = await signOut(auth)
    return window.location.reload(signoutData)
    console.log(signoutData)
  }
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
            {auth.currentUser?.email && <li><NavLink className={({isActive})=> isActive? "activelink": null} to="/profile">Profile</NavLink></li>}
            <li><button onClick={handlelogout}>X</button></li>
            </ul>
        </nav>
        </div> 
    </div>
  )
}