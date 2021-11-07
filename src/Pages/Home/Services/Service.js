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
            <div className="card h-100 service-cad">
                <img src={img} className="service-img card-img-top img-hover-zoom " alt="..." />
                <div className ="card-body">
                    <h5 className="card-title card-name"> {name}</h5>
                    <div>
                    <p className="card-text">Location: <span className="font-weight-bold">{place}</span>  {location}</p>
                    <p className="card-text">Price: <span  className="font-weight-bold">{price}</span> </p>
                    <p className="card-text "><span  className="font-weight-bold">{rating}</span> <span className='card-rating'>{ratingicon}</span> </p>
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