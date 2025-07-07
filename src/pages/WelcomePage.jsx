import React from 'react';
import { Link} from 'react-router-dom';
import '../pages css/WelcomePage.css';

const WelcomePage = () => {
    
    
    return (
        <div className="welcome-container">
            <img src="/App Logo.png" className="welcome-logo" />
            
            <div className="welcome-subcontainer">
                <ul className='welcome-subcontainer-links'>
                    <li><Link to='/sign-in'>Sign In</Link></li>
                    <li><Link to='/sign-up'>Create Account</Link></li>
                </ul>
                <button className='welcome-subcontainer-button'>  
                    <Link to='/explore'>Explore Quizzes</Link>
                </button>
            </div>
        </div>
    )
};

export default WelcomePage;