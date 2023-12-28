import { GoogleLogin } from '@leecheuk/react-google-login';
import { useNavigate } from 'react-router-dom';

  const clientid='568637996821-8rts0pepfnvch7qvkn0d1g8cif6jf8r5.apps.googleusercontent.com'

  function Login(){
    const navigate=useNavigate()
    const onSuccess=(res)=>{
      console.log("Login Sucess",res.profileObj);
      navigate('/home')
    }
    const onFailure=(res)=>{
      console.log("Login Failure",res);
    }
    const handleSubmit=()=>{
      alert("Login Successfull")
      navigate('/home')
    }
    return(
      <div style={{marginTop:'50px'}}>
        <div style={{alignItems:"center",margin:'auto',border:'1px solid black',width:'30%',padding:'50px'}}>
          <label htmlFor="">Email: </label>
          <input type="email" placeholder='Enter your Email' />
          <br />
          <label htmlFor="">Password: </label>
          <input type="password" placeholder='Enter your password' />
          <br />
          <button onClick={handleSubmit}>Submit</button>
          <br />
          <GoogleLogin
         clientId={clientid}
         onSuccess={onSuccess}
         onFailure={onFailure}
         cookiePolicy={'single_host_origin'}
         isSignedIn={true}/>
        </div>
        
      </div>
    )
  }
  export default Login