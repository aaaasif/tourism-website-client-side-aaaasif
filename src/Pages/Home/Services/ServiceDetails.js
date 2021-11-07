import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Services.css"

const ServiceDetails = () => {
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState({})


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const allData = {
            serviceInfo: serviceDetails,
            customerInfo: data
        };
        axios.post('https://gory-alien-15205.herokuapp.com/details', allData)
            .then (res => {
                if (res.data.insertedId){
                    alert('We Recive Your Information & Your Service Added To The Card');
                    reset();
                }
            })
    }

    useEffect (() =>{
        fetch(`https://gory-alien-15205.herokuapp.com/services/${id}`)
        .then(res=>res.json())
        .then(data=> {
            setServiceDetails(data)
            console.log(data)
        })
    },[])
    
    
    return (
            <div className=" add-service d-flex justify-content-center">    
                <div className="card h-100 service-carosol m-5">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                             <img className="d-block w-100" src={serviceDetails?.img} alt="First slide"/>
                      </div>
                      <div className="carousel-item">
                             <img className="d-block w-100" src={serviceDetails?.img2} alt="Second slide"/>
                      </div>
                      <div className="carousel-item">
                            <img className="d-block w-100" src={serviceDetails?.img3} alt="Third slide"/>
                      </div>
                    </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>To Confrom <span className='card-name'> {serviceDetails?.name}</span> trip Give your Information </h1>
                    <input {...register("name")} placeholder='Type Your Name' />
                    <input {...register("email")}  placeholder='Type Your Email'/>
                    <input type="number" {...register("number") } placeholder='Type Your Number' />
                    <input type="submit" />
                </form>
            </div>
    );
};

export default ServiceDetails;
{/* <div className="container mt-5">
                     <h1 className="mb-2">{serviceDetails?.name} services</h1>
                     <img className="h-25" src={serviceDetails?.img3} className="service-img card-img-top" alt="..." />
                     <h2>{serviceDetails?.location}</h2>
                </div> */}