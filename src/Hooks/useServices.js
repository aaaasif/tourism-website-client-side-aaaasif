import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://gory-alien-15205.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            });
    }, []);

    return { services  };
};

export default useServices;