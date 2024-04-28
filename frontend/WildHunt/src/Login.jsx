import React, { useState } from 'react';
import './login.css';
import Signup from './signup'; 

const Login = () => {
    const [showLogin, setShowLogin] = useState(true); 
    const [showSignup, setShowSignup] = useState(false); 

    const handleSignupClick = () => {
        setShowLogin(false); 
        setShowSignup(true); 
    };

    return (
        <div className="login-container">
            {showLogin && ( 
                <>
                    <h2 className="login-title">Login</h2>
                    <form className="login-form" action="">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id='username' name='username' required/><br/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" required/><br />
                        <button type="submit">Login</button>
                    </form>
                    <div className="signup-link">
                      
                        Don't have an account? <a href="#" onClick={handleSignupClick}>Sign Up</a>
                    </div>
                </>
            )}
            {showSignup && <Signup />} 
        </div>
    );
};

export default Login;
