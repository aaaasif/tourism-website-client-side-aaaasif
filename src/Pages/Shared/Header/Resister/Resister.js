import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import "./Register.css"


const Resister = () => {
    const { handleResistration, handleNameInput, handleEmailInput, handlePasswordInput, error } = useAuth();


    return (
        <div className="d-flex justify-content-center m-5">
            <div>
                <img className="w-75 register-logo" src="https://i.ibb.co/Bt81jZC/Mobile-login-pana.png" alt="" />
            </div>
            <div className="signinBody">
                <div className="signin-main mx-auto pt-5 mt-5 me-5">
                    <h1 className="login-title">Resistration</h1>
                    <form onSubmit={handleResistration}>
                        <input className="input-field" onBlur={handleNameInput} type="text" placeholder="Full Name..." /><br />
                        <input className="input-field" onBlur={handleEmailInput} type="email" placeholder="Email..." required /><br />
                        <input className="input-field" onBlur={handlePasswordInput} type="password" placeholder="Password..." required /><br /><br />
                        <div className="text-danger">{error}</div>
                        {/* <input type="password" placeholder="Confirm Password..." /><br /><br /> */}
                        <button className="common-button">Resister</button><br /><br />
                    </form>
                    <p>Already have account? <NavLink className="toggle" to="/signin">Sign In</NavLink></p>
                </div>
            </div>
        </div>    
    );
};

export default Resister;