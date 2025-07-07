import React from 'react';
import { Link} from 'react-router-dom';
import '../pages css/SignIn.css';

const SignIn = () => {
    
    
    return (
        <div className="sign-in-container">
            <img src="/App Logo.png" className="sign-in-logo" />

            <div className='sign-in-buttons'>
                <button className='continue-with-google-button'>  
                    <Link to='/continue-with-google'>Continue with Google</Link>
                </button>
                <br/>
                <button className='continue-with-email-button'>  
                    <Link to='/continue-with-email'>Continue with Email</Link>
                </button>
            </div>

                <ul className='sign-in-links'>
                    <li><Link to='/forgot-password'>Forgot Password</Link></li>
                    <li><Link to='/sign-up'>Create Account</Link></li>
                </ul>
            
        </div>
    )
};

export default SignIn;