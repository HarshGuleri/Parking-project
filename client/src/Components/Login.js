import React from 'react';
import '../Styles/Signin.css';

const SignUp = () => {
    return (
        <div class="container1">
            <div class="signup-box">
                <h2>Sign Up</h2>
                <form>
                    
                    <div class="input-box">
                        <input type="email" name="email" required />
                        <label>Email</label>
                    </div>
            
                    <div class="input-box">
                        <input type="password" name="password" required />
                        <label>Password</label>
                    </div>
                    
                    <button type="submit" class="btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;