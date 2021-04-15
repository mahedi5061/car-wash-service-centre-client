import React, { useEffect, useState } from 'react';
import ServiceInfoShow from '../ServiceInfoShow/ServiceInfoShow';
import './Services.css'

const Services = () => {
     const [services,setService]=useState([]);
     useEffect(() =>{
         fetch("http://localhost:8000/services")
         .then(res=>res.json())
         .then(data=>setService(data))
     },[])
    
    return (
        <>
        <h5 className="d-flex justify-content-center ourServices">Our Services</h5>
        <h2 className="d-flex justify-content-center serviceProvide">Service with Provide</h2>
           <div className="d-flex justify-content-around my-5 py-5">
            <div className="row"> 
            {
                services.map((service=><ServiceInfoShow service={service}></ServiceInfoShow>))
            }
            </div>
           </div> 
        </>
    );
};

export default Services;