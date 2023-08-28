import React from 'react'
import { Link } from 'react-router-dom'
export default function Notfound() {
  return (
    
      <div className='div404'>
        <h2>Page, the page you were looking for was not found</h2>
        <Link to="/">Return To Home</Link>
      </div>
    
    
  )
}
