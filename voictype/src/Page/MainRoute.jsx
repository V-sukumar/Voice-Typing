import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import { Signup } from './SignOut'
import {Home} from './Home'
import { gapi } from 'gapi-script';
const clientid='568637996821-8rts0pepfnvch7qvkn0d1g8cif6jf8r5.apps.googleusercontent.com' 

export const MainRoute = () => {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientid:clientid,
        scope:""
      })
    }
    gapi.load('client:auth2',start)
  })
  return (
    <div>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Login/>} />
          <Route path='signout' element={<Signup/>} />
        </Routes>
    </div>
  )
}
