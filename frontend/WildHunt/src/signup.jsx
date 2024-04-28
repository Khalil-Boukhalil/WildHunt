import React from 'react';
import './signup.css';

const Signup = () => {
    return (
        <div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <form className="signup-form" action="">
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" id='fullname' name='fullname' required/><br/>
                <label htmlFor="email">Age:</label>
                <input type="number" id='age' name='age' required/><br/>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" required/><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" required/><br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
