import React from 'react';
import './Banner.css'
import BannerLogo from '../../../Images/home-img.svg'
const Banner = () => {
    return (
        <div className="home row align-items-center" id="home">
            <div className="col-7">
                <img className="image w-75" src={BannerLogo} alt="" />
            </div>
            <div className="content col-5 text-start">
                <h1>Stay Safe, Stay Healthy</h1>
                <p>“To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.”</p>
                <button className="common-button fw-bold">Contact Us</button>
            </div>
        </div>
 
    );
};

export default Banner;