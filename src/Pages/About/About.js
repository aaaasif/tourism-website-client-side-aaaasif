import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="about-main container my-5">
            <div className="aboutUs-main row d-flex align-items-center justify-content-around pb-2 my-5">

                {/* About Us */}
                <div className="aboutUs col-lg-5">
                    <h1 className="about-title">About Us</h1>
                    <p>Medilab Hospital (Pvt.) Ltd. is the best super-specialty tertiary care hospital in Bangladesh, confidently providing comprehensive health care with the latest medical, surgical and diagnostic facilities.....</p>
                    <Link to="/">
                        <button className="common-button">Read More</button>
                    </Link>
                </div>

                <div className="col-lg-5">
                    <img src="https://i.ibb.co/qnY3qdz/about-us.png" alt="" className="about-img my-5 img-fluid" />
                </div>
            </div>
            <div className="privacyMain py-5">
                <div className="mx-auto privacy">
                    <h4>What We Offer</h4>
                    <p>The Ambulance service at Super Medical Hospital provides emergency support to patients who require it. In order to bring patients who call for ambulance they need to provide their home address, telephone or cellphone number to the ambulance drivers.</p>
                    <p>We ensure vaccines are available to all people, especially the poor and vulnerable in an effective way. Vaccines are provided by the Government of Bangladesh. We at the hospital also maintain the cold chain and delivery of the vaccines.</p>
                    <p>SKB Medical Hospital confidently providing comprehensive health care with the latest medical, surgical and diagnostic facilities. These services are provided by expert medical professionals, skilled nurses and technologists using state-of-the-art technology.</p>
                </div>
            </div>
            {/* About Out Teachers */}
            <div className="aboutUs2 row d-flex justify-content-around py-5 my-5">
                <div className="col-lg-5">
                    <h4>About Our Doctors</h4>
                    <p>All the Doctors are Highly Educated and Associate Professor holding PhD in Medical with over 20 years of teaching experience.</p>
                    <p>Experienced Doctors equipped with a diverse and promising skill-set. Proficient in various platforms, languages, and database systems.</p>
                    <p>We use student-centered, personalized way of teaching. My lessons are well organized and adapted to your needs.</p>
                </div>

                {/* About Out Support Team */}
                <div className="col-lg-5">
                    <h4>About Our Nurses</h4>
                    <p>The Nurses of Medilab provides emergency support to patients who require it. In order to bring patients who call for ambulance they need to provide their home address, telephone or cellphone number to the ambulance drivers.</p>
                    <p>They will explain the treatment part I will share my screen and show you live how the treatment is to be fed and executed. </p>
                    <p>This will help the students to learn dos and don'ts while treatment in a specific language.</p>
                </div>
            </div>

            {/* privacy Policy */}
            <div className="privacyMain py-5">
                <div className="mx-auto privacy">
                    <h4>Our Privacy policy</h4>
                    <p>Take a minute and read the site's Privacy Policy, as well as the Kids' Privacy Policy for additional information. There is a link to the company's privacy policy on the catalog request page, so you can review exactly how your personal information will be used before sending in your request.<br /><br /> It's important to read their Privacy Policy before you submit personal information. Spend some time looking around the site and check the privacy policy before you jump in. It's free to join the Parker's online website, and their privacy policy promises you won't receive unwanted emails.</p>
                </div>
            </div>
        </div>
    );
};

export default About;