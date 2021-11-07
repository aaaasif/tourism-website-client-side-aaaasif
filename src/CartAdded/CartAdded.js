import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import AddedCart from './AddedCart';

const CartAdded = ({AddToCart}) => {
    console.log(AddedCart)
    const { user } = useAuth();

    // console.log(user);
    const [serviceAdded, setServiceAdded] = useState([]);
    console.log(serviceAdded);
    const myOrder = serviceAdded.filter(serviceAdd => serviceAdd.customerInfo.email === user.email);
    console.log(myOrder);
    
    useEffect(() => {
        fetch('https://gory-alien-15205.herokuapp.com/details')
            .then(res => res.json())
            .then( data => setServiceAdded(data))
    }, []);

    
    
    return (
        <div>
            {
                myOrder.map(AddToCart => 
                    <AddedCart 
                        key={AddToCart._id} 
                        AddToCart={AddToCart} 
                    />)
            }
        </div>
    );
};

export default CartAdded;