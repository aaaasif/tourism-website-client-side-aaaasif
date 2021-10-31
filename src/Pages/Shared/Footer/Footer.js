import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
      <div>
        <div className="footer-container mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="left-container text-start">
                  <h1> MediLab</h1>
                  <div className="icons-container d-flex text-center ">
                  </div>
                  <p className="mt-4 ">
                    <small>
                      *These statements have not been evaluated by the Food and
                      Drug Administration. These products are not intended to
                      diagnose.
                    </small>
                  </p>
  
                  <p className="mt-5">
                    <small>All rights reserved by @aaasif </small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-menu-container">
                  <ul>
                    <li className="footer-menu">Home</li>
                    <li className="footer-menu">Doctors</li>
                    <li className="footer-menu">Contact us</li>
                    <li className="footer-menu"> Booking</li>
                    <li className="footer-menu"> About us</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-footer-container">
                  <h3>Sign up for the newsletter</h3>
                  <div className="input-group mb-3 m-5">
                      <input type="text" className="form-control" placeholder="EnterYour Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                      <button className="common-button m-3" type="button">Send Email</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Footer;