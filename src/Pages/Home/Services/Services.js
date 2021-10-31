import React, { useEffect, useState } from 'react';
import useServices from '../../../Hooks/useServices';
import Service from './Service';
import './Services.css';

const Services = () => {
    const { services } = useServices();
    
    return (
        <div className="container service-body">
            <h1>Our Services</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;