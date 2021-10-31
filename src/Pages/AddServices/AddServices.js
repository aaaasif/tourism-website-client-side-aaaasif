import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddServices.css"

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
        <h1>Add Your Own Place</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", {required: true, maxLength:20})} placeholder="name"></input>
            <input {...register("location")} placeholder="location" ></input>
            <input type="number" {...register("price")} placeholder="price"></input>
            <input {...register("img")} placeholder="input your img URL"></input>
            <input type="submit"></input>
        </form>
        </div>
    );
};

export default AddServices