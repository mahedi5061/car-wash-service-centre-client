import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { userContext, userOrder } from '../../../App';
 
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Stripes from '../../PaymentGateWay/Stripes/Stripes';
import './Books.css'
 
const Books = () => {
     
    const { id } = useParams();
    const [userServices, setUserServices] = useContext(userOrder);
    const [display,setDisplay]=useState(true)
    const [login, setLogin] = useContext(userContext);
    const [shipmentUserData, setShipmentUserData] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const [shipmentProduct, setShipmentProduct] = useState({});

    const onSubmit = data => {
        setShipmentUserData(data)
    };
 
    const userDataById = userServices.find(userService => userService._id === id);

    const handleEventClick=()=>{
        setDisplay(false);
    }
    const handlePaymentSuccess = (paymentId) => {

        const orderDetails = {
            ...login,
            // ...shipmentProduct,
            shipment: shipmentUserData,
            paymentId,
            orderDate: new Date(),

        }
        
        fetch('https://shrouded-lake-27228.herokuapp.com/shipments', {
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
    // useEffect(() => {
    //     fetch('https://shrouded-lake-27228.herokuapp.com/product/'+id)
    //         .then(res => res.json())
    //         .then(data => {
    //             setShipmentProduct(data[0])
    //         })
    // }, [id])
    
    return (
        <div className="container-fluid row" >
            <div style={{ width: "600px" }}>
                <Sidebar></Sidebar>
            </div>
            

            {
                display ?
            <div className=" col-md-4 mt-3 p-4 pr-5 ">
    
         <div className="mt-3 p-4  ">
         <h3 style={{color:"green",fontSize:"25px"}}>Your Service is ready for order</h3><br></br>
         <div class="card cardProperty " style={{width: "30rem"}}>
        <img src={`data:image/jpeg;base64,${userDataById?.image?.img}`} class="card-img-top pt-2" style={{height: "400px"}} alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{userDataById?.serviceName}</h5>
          <p class="card-text">{userDataById?.description}</p>
          <p style={{fontSize:"20px",fontWeight:"bold",color:"red"}} class="card-text">${userDataById?.price}</p>
           <button onClick={handleEventClick} className="btn-design d-flex justify-content-center">Replace Service </button> 
          
        </div>
      </div>

        </div>
          
         </div>:


         <div className="col-md-7 mt-5 p-4 pr-5" style={{ position: "absolute", right: 150, backgroundColor: "#CCB686" }}>
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


            }




            {/* end */}
             
       
        </div>
    );
};

export default Books;