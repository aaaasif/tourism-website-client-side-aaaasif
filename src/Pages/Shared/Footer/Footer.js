import React from 'react';
import "./Footer.css"
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
      <div className="text-white">
      <div className="py-4 gradient">
        <Container>
          <Row>
            <Col md={6}>
              <div className="text-center my-2">
                <img width="120px" src="https://i.ibb.co/jv6YTmP/30-301819-tourist-travel-icon-png.jpg" alt="" />
              </div>

              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span className="ms-1 fs-5">Gournadi,Barishal,Bangladesh</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ms-1 fs-5">
                    Official: alexasif4@gmail.com
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="ms-1 fs-5">
                    Helpline: 01798626997(Available:10:00AM to 10.00PM)
                  </span>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <ul className="list-unstyled footer-link">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
                <li>
                  <NavLink to="/cartadded">Cart</NavLink>
                </li>
                <li>
                  <NavLink to="/policy">Policy</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <div className="">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/C812P6f/payment.png"
                  alt="payment methods"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <hr className="m-0 p-0" />
      <p className="text-center m-0 py-3 copyright">
        Copyright © All Reserved by Tourism Community in
        2021
      </p>
    </div>
    );
  };

export default Footer;