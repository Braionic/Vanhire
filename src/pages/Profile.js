import React from 'react'
import { auth } from '../api'
export default function Profile() {
    const user = auth.currentUser
  return (
    <div>
        <div>Profile</div>
        <h3>{user?.name}</h3>
        <h3>{user.email}</h3>
    </div>
    
  )
}
