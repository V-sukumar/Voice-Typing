import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
      <Link to={'/'} style={{textDecoration:'none'}}><h1>Home</h1></Link>
      <Link to={'login'} style={{textDecoration:'none'}}><h1>Login</h1></Link>
      <Link to={'signup'} style={{textDecoration:'none'}}><h1>Signup</h1></Link>
    </div>
  )
}
