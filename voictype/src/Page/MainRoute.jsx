import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import { Signup } from './Signup'
import {Home} from './Home'
export const MainRoute = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='login' element={<Login/>} />
          <Route path='signup' element={<Signup/>} />
        </Routes>
    </div>
  )
}
