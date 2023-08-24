import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
export default function HostLayout() {
  return (
    <div>
        <ul>
            <li><Link to="/host">Dashboard</Link></li>
            <li><Link to="/host/income">Income</Link></li>
            <li><Link to="/host/reviews">Reviews</Link></li>
        </ul>
        <Outlet />
    </div>
  )
}
