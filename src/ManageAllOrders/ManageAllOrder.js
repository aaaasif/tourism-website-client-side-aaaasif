import React, { useEffect, useState } from 'react';
import Order from './Order';

const ManageAllOrder = () => {
    
    const [ allOrders, setAllOrders] = useState([]);
    const [ reload, setRealod] = useState(false)
   

    useEffect(() => {
        fetch('https://gory-alien-15205.herokuapp.com/details')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllOrders(data)
            });
    }, [reload]);
    // DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/details/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        setRealod(!reload)
                    }
                });
        }
    }

    return (
        <div>
            {
                allOrders.map(order => 
                    <Order 
                        key={order._id}
                        allOrders={allOrders}
                        handleDeleteUser={handleDeleteUser}
                        order={order} 
                    />
                )
            }
        </div>
    );
};

export default ManageAllOrder;