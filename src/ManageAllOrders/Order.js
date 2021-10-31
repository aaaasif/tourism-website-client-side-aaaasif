import React from 'react';

const Order = ({order}) => {
    const { serviceInfo, customerInfo } = order;
    console.log(customerInfo);
    const { name, img3, stay, location, rating, price} = serviceInfo;
    const { email } = customerInfo;
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="">
                    <img className=" h-75 w-75" src={img3} alt="Card image cap"/>
            </div>
            <div className="align-items-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            
        </div>
    );
};

export default Order;