import React from 'react';
import { NavLink } from 'react-router-dom';
import Bounce from "react-reveal/Bounce";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarked, faStar } from '@fortawesome/free-solid-svg-icons'
import './Services.css';

const Service = ({ service }) => {
    const { _id, img, name, location, price, rating, RoomCategory } = service;
    const place = <FontAwesomeIcon icon={faMapMarked} />
    const ratingicon = <FontAwesomeIcon icon={faStar} />

    return (
        <div className="col">
            <Bounce right cascade>
            <div className="card h-100">
                <img src={img} className="service-img card-img-top" alt="..." />
                <div class ="card-body">
                    <h5 className="card-title"> {name}</h5>
                    <div>
                    <p className="card-text">{place} {location}</p>
                    <p className="card-text">{price}</p>
                    <p className="card-text">{rating} {ratingicon}</p>
                    </div>
                    <div>
                    {/* <p className="card-text">Room Category{Room Category}</p> */}
                    <p className="card-text">{rating} {ratingicon}</p>
                    </div>
                    <NavLink to={`/service/${_id}`}>
                    <button className=" common-button mb-2 m-2"
                    >Booking Procedure</button>
                    </NavLink>
                </div>
            </div>
            </Bounce>
        </div>
    );
};

export default Service;