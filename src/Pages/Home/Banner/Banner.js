import React from 'react';
import { Container, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
            <div>
            <div
            style={{
              background: `url("https://i.ibb.co/8sD4SYk/omer-salom-f-BFND11-TFz-U-unsplash.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              width: "100%",
            }}
          >
            <Container>
              <div
                style={{ height: "90vh" }}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="text-center my-5 py-5">
                  <Bounce left cascade>
                    <h1 className="text-dark">Travel Words that Describe Wanderlust Perfectly</h1>
                  </Bounce>
        
                  <Bounce right cascade>
                    <p className="my-4 text-white fs-5 font-weight-bold">
                    “Travel is the only thing you buy that makes you richer”
                    </p>
                  </Bounce>
        
                  <Bounce>
                    <NavLink
                      to="/about"
                      className="rounded-pill btn btn-primary fs-5 py-2 px-4"
                    >
                      About Us
                    </NavLink>
                  </Bounce>
                </div>
              </div>
            </Container>
          </div>
        </div>
    );
};

export default Banner;










// import React from 'react';
// import './Banner.css'
// import BannerLogo from '../../../Images/home-img.svg'
// const Banner = () => {
//     return (
//         <div className="home row align-items-center" id="home">
//             <div className="col-7">
//                 <img className="image w-75" src={BannerLogo} alt="" />
//             </div>
//             <div className="content col-5 text-start">
//                 <h1>Stay Safe, Stay Healthy</h1>
//                 <p>“To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.”</p>
//                 <button className="common-button fw-bold">Contact Us</button>
//             </div>
//         </div>
 
//     );
// };

// export default Banner;