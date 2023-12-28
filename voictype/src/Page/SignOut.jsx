import React from 'react'
import { GoogleLogout } from '@leecheuk/react-google-login'
import { useNavigate } from 'react-router-dom'
const clientid='568637996821-8rts0pepfnvch7qvkn0d1g8cif6jf8r5.apps.googleusercontent.com'
export const Signup = () => {
  const navigate=useNavigate()
  const onSuccess=()=>{
    navigate('/')
  }
  return (
    <div>
      <GoogleLogout 
      clientId={clientid} 
      buttonText={'Logout'}
      onLogoutSuccess={onSuccess}/>
    </div>
  )
}
