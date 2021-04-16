import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Stripes from '../../PaymentGateWay/Stripes/Stripes';

const Book = () => {
    const [shipmentUserData, setShipmentUserData] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        setShipmentUserData(data)
    };
    const handlePaymentSuccess = () => {
    }
    return (
        <div className="container-fluid row">
            <div className="col-md-4">
        <Sidebar></Sidebar>
            </div>
     
          
           <div className="col-md-7 mt-5 p-4 pr-5" style={{ position: "absolute", right: 150, backgroundColor: "#CCB686" }}>
           <h3 className="text-center" style={{color: "red"}}>Please Select a Service First !!</h3>
        <h5>Book</h5>

        <form style={{ display: shipmentUserData ? "none" : "block" }} onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input type="text" ref={register({ required: true })} className="form-control" name="name" placeholder="Enter Your Name" />
                {errors.name && <span className="error">Name is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="text" ref={register({ required: true })} className="form-control" name="email" placeholder="Enter Your Email" />
                {errors.email && <span className="error">Email is required</span>}
            </div>


            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Address</label>
                <input type="text" ref={register({ required: true })} className="form-control" name="address" placeholder="Enter Your Address" />
                {errors.address && <span className="error">Address is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Phone</label>
                <input type="text" ref={register({ required: true })} className="form-control" name="phone" placeholder="Enter Your Phone Number" />
                {errors.phone && <span className="error">Phone number is required</span>}
            </div>


            <button type="submit" className="btn-submit">Submit</button>
        </form>
        <div className="col-md-10" style={{ display: shipmentUserData ? "block" : "none" }} >
            <Stripes handlePaymentSuccess={handlePaymentSuccess}></Stripes>

        </div>
    </div>
           </div>
          
        
       
    );
};

export default Book;