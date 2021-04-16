import React, { useContext } from 'react';
import { userOrder } from '../../../App';
import ServiceInfoShow from '../ServiceInfoShow/ServiceInfoShow';
import './Services.css'

const Services = () => {
    const [userServices,setUserServices] = useContext(userOrder);
    return (
        <>
        <h5 className="d-flex justify-content-center ourServices">Our Services</h5>
        <h2 className="d-flex justify-content-center serviceProvide">Service with Provide</h2>
           <div className="d-flex justify-content-around my-5 py-5">
            <div className="row"> 
            {
                userServices.map((service=><ServiceInfoShow service={service}></ServiceInfoShow>))
            }
            </div>
           </div> 
        </>
    );
};

export default Services;