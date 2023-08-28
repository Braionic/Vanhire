import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
export default function HostLayout() {
    const myactivestyle = {
        color: "#151515",
        fontWeight: "bold"
    }
  return (
    <div>
        <ul>
            <li><NavLink end style={({isActive})=> isActive? myactivestyle: null} to=".">Dashboard</NavLink></li>
            <li><NavLink style={({isActive})=> isActive? myactivestyle: null} to="van">Van</NavLink></li>
            <li><NavLink style={({isActive})=> isActive? myactivestyle: null} to="income">Income</NavLink></li>
            <li><NavLink style={({isActive})=> isActive? myactivestyle: null} to="reviews">Reviews</NavLink></li>
        </ul>
        
        <Outlet />
    </div>
  )
}
