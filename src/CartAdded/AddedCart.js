import React, { useState } from 'react';

const AddedCart = ({AddToCart, order}) => {
    const { serviceInfo, customerInfo } = AddToCart;
    console.log(AddToCart);
    const { name, img3, img2, img, stay, location, rating, price} = serviceInfo;
    const { email } = customerInfo;
    const [ reload, setRealod] = useState(false)

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want cancel Your Trip?');
        if (proceed) {
            const url = `https://gory-alien-15205.herokuapp.com/details/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Cancel the trip successfully');
                        setRealod(!reload)
                    }
                });
        }
    }

    return (
        <div className="d-flex justify-content-around m-5 cart-body">
            <div className="">
                    <img className="cart-img m-3" src={img3} alt="Card image cap"/>
            </div>
            <div className="align-items-center mt-5">
                <h5 className="card-title card-name">{name}</h5>
                <p className="card-text">{stay}</p>
                <p className="card-text">{price}</p>
                <p className="card-text">{location}</p>
                <button className="common-button" onClick={() => handleDeleteUser(AddToCart._id)}>Cancel the Trip</button>
            </div>
            
        </div>
    );
};

export default AddedCart;