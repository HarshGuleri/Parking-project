import React from 'react';
import '../Styles/SignUp.css';

const SignUp = () => {
    return (
        <div class="container1">
            <div class="signup-box">
                <h2>Sign Up</h2>
                <form action='./login'>
                    <div class="input-box">
                        <input type="text" name="name" required />
                        <label>Name</label>
                    </div>
                    <div class="input-box">
                        <input type="email" name="email" required />
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <input type="tel" name="phone" required pattern="[0-9]{10}" />
                        <label>Phone Number</label>
                    </div>
                    <div class="input-box">
                        <input type="password" name="password" required />
                        <label>Password</label>
                    </div>
                    <div class="input-box">
                        <label class="role-label">Select Role:</label>
                        <select name="role" required>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit" class="btn">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;