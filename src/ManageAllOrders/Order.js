import React from 'react';

const Order = ({order, allOrder, handleDeleteUser}) => {
    const { serviceInfo, customerInfo } = order;
    const { name, img3, stay, location, rating, price} = serviceInfo;
    const { email } = customerInfo;
    console.log(serviceInfo);

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
        <div className="d-flex justify-content-center mt-5">
            <div className="">
                    <img className=" h-75 w-75" src={img3} alt="Card image cap"/>
            </div>
            <div className="align-items-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <button onClick={() => handleDeleteUser(order._id)}>Delate</button>
            </div>
            
        </div>
    );
};

export default Order;