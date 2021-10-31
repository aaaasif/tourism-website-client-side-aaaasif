import React, { useEffect, useState } from 'react';
import Order from './Order';

const ManageAllOrder = () => {
    
    const [ allOrders, setAllOrders] = useState([]);
   

    useEffect(() => {
        fetch('http://localhost:5000/details')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllOrders(data)
            });
    }, []);

    return (
        <div>
            {
                allOrders.map(order => 
                    <Order 
                        key={order._id}
                        order={order} 
                    />
                )
            }
        </div>
    );
};

export default ManageAllOrder;