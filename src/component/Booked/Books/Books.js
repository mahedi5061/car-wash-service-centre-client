import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Stripes from '../../PaymentGateWay/Stripes/Stripes';
import './Books.css'


const Books = () => {
    const [info, setInfo] = useState({});
    const [login, setLogin] = useContext(userContext);
    const [shipmentData, setShipmentData] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        setShipmentData(data)
    };

    const handlePaymentSuccess = (paymentId) => {
        const orderDetails = {
            ...login,
            shipment: shipmentData,
            paymentId,
            orderDate: new Date(),

        }
        //add order in database.

        fetch('http://localhost:8000/shipments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                
            })

    }
    
  
    return (
        <div className="container-fluid row" >
            <div style={{ width: "600px" }}>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 mt-5 p-4 pr-5" style={{ position: "absolute", right: 150, backgroundColor: "#CCB686" }}>
                <h5>Book</h5>

                <form style={{ display: shipmentData ? "none" : "block" }} onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Name</label>
                    <input   type="text" ref={register({ required: true })} className="form-control" name="name" placeholder="Enter Your Name" />
                    {errors.name && <span className="error">Name is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input   type="text" ref={register({ required: true })}className="form-control" name="email" placeholder="Enter Your Email" />
                    {errors.email && <span className="error">Email is required</span>}
                </div>
 

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Address</label>
                    <input  type="text" ref={register({ required: true })}className="form-control"   name="address" placeholder="Enter Your Address" />
                    {errors.address && <span className="error">Address is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Address</label>
                    <input   type="text" ref={register({ required: true })}className="form-control"   name="phone" placeholder="Enter Your Phone Number" />
                     {errors.phone && <span className="error">Phone number is required</span>}
                </div>
               
               
                <button type="submit" className="btn-submit">Submit</button>
            </form>
            <div  className="col-md-10" style={{ display: shipmentData ? "block" : "none" }} >
                <Stripes handlePaymentSuccess={handlePaymentSuccess}></Stripes>
                
            </div>
            </div>
           
        </div>
    );
};

export default Books;