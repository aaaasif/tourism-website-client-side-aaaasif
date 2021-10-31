import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './SignIn.css';

const Login = () => {
    const { handleSignIn, googleSignIn, handleEmailInput, handlePasswordInput, error } = useAuth()
    return (
        <div className="d-flex justify-content-evenly">
            <div className="signinBody">
                <div className="signin-main mx-auto pt-5 mt-5">
                    <h1 className="login-title">Sign In</h1>
                    <form onSubmit={handleSignIn}>
                        <input className="input-field" onBlur={handleEmailInput} type="email" placeholder="Email..." required /><br />
                        <input className="input-field" onBlur={handlePasswordInput} type="password" placeholder="Password..." required /><br /><br />
                        <div className="text-danger">{error}</div>
                        <button className="common-button">Sign In</button><br />
                    </form><br />
                    <p>Don't have account? <NavLink className="toggle" to="/resister">Create Now</NavLink></p>
                    <p>Or</p>
                    <button className="common-button" onClick={googleSignIn}>Sign In with Google</button>
                </div>
            </div>
            <div>
                <img className="w-75 login-image" src="https://i.ibb.co/NKK9SYb/Sign-in-bro.png" alt="Login"/>
            </div>
        </div>
    );
};

export default Login;