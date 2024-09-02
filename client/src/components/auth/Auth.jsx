import './auth.css';
import secure from '../../assets/secure.svg';
import { useState } from 'react';
import { signIn, signUp } from '../../actions/auth';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

// const InvalidUser = () => {
//   return <div>
//     <h1>Invalid User</h1>
//   </div>
// }
const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({firstName : "", lastName : "", email:"", password: ""});

    const switchMode = () => {
        setIsSignUp((prev) => !prev);
    }
    const submitFormData = (e) => {
      console.log(result);
      e.preventDefault();
        if(isSignUp){
          dispatch(signUp(formData))
        }else{
          dispatch(signIn(formData))
          result.user.user.email === formData.email && result.user.user.password ? navigate('/'): <h1>Invalid credentials</h1>
        }
      
      //clear the form data
      setFormData({firstName : "", lastName : "", email:"", password: ""})
    }

    const result = useSelector(state => state.users);

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name] : e.target.value})
    } 
  return (
    <div className='auth_container'>
        
        <div className="auth_content">
            <div className='text_center'>
                <img src={secure} alt="secure_logo" />
                <h2>{isSignUp ?  'Sign Up': 'Sign In'}</h2>
            </div>
            
            <form  method="post" onSubmit={submitFormData}>
                {isSignUp && (
                <div className='userName'>
                    <input type="text" name="firstName" placeholder='First Name' value={formData.firstName} onChange={handleChange} required/>
                    <input type="text" name="lastName" placeholder='Last Name' value={formData.lastName} onChange={handleChange} />
                </div>) }
                <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required/>
                <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} required/>
                
                <button type='submit'>{isSignUp ? 'Sign Up': 'Sign In'}</button>
                <button type='button' id='plain_button' onClick={switchMode}>{isSignUp ? "Already have an account? Sign In": "Don't have an account? Sign Up"}</button>
            </form>
        </div>    
    </div>
  )
}

export default Auth;