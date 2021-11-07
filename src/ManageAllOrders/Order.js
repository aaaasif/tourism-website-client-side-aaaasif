import React from 'react';

const Order = ({order, allOrder, handleDeleteUser}) => {
    const { serviceInfo, customerInfo } = order;
    const { name, img3, stay, location, rating, price} = serviceInfo;
    const { email, number} = customerInfo;
    console.log(customerInfo);

     // DELETE AN USER
    //  const handleDeleteUser = id => {
    //     const proceed = window.confirm('Are you sure, you want to delete?');
    //     if (proceed) {
    //         const url = `http://localhost:5000/details/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     alert('deleted successfully');
    //                     const remainingDetails = allOrder.filter(order => order._id !== id);
                        
    //                 }
    //             });
    //     }
    // }

    return (
        <div className="d-flex justify-content-around m-5 cart-body">
            <div className="">
                    <img className=" cart-img m-3" src={img3} alt="Card image cap"/>
            </div>
            <div className="align-items-center mt-5">
                <div>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{stay}</p>
                <button onClick={() => handleDeleteUser(order._id)} className="common-button">Delate</button>
                </div>
                <div>
                    <h1 className='card-name'>About You</h1>
                    {/* <p> <span className='card-name'>Name</span> {name}</p> */}
                    <p> <span className='card-name'>Email</span> {email}</p>
                    <p> <span className='card-name'>Number</span> {number}</p>
                    <p> Status: <span className='status'>Pending</span></p>
                    <button className='common-button mb-5'>Confrom Trip</button>
                </div>
            </div>
            
        </div>
    );
};

export default Order;