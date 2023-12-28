import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
      <Link to={'/'} style={{textDecoration:'none'}}><h1>Login</h1></Link>
      <Link to={'signout'} style={{textDecoration:'none'}}><h1>SignOut</h1></Link>
    </div>
  )
}
