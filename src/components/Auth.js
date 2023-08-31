import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../pages/Login'
export default function Auth() {
    let username = "Henry"
    let password ="12345"
  return (
    <div>{username === "Henry" && password === "12345" ?<Outlet/>:<Login />}</div>
  )
}
