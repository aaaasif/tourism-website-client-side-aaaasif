import React from 'react';
import { NavLink } from 'react-router-dom';
import './Services.css';

const Service = ({ service }) => {
    const { _id, img, name, location, price } = service;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="service-img card-img-top" alt="..." />
                <div class ="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{location}</p>
                    <p className="card-text">{price}</p>
                    <NavLink to={`/service/${_id}`}>
                    <button className=" common-button mb-2 m-2"
                    >Buy Now</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;