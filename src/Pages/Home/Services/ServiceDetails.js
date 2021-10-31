import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
                    alert('We recive Your Information.');
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
            <div className=" add-service">    
                <div className="container mt-5">
                     <h1 className="mb-2">{serviceDetails?.name} services</h1>
                     <img className="h-25" src={serviceDetails?.img3} className="service-img card-img-top" alt="..." />
                     <h2>{serviceDetails?.location}</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder='Type Your Name' />
                    <input {...register("email")}  placeholder='Type Your Email'/>
                    <input type="number" {...register("number") } placeholder='Type Your Number' />
                    <input type="submit" />
                </form>
            </div>
    );
};

export default ServiceDetails;