import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceInfoShow.css'

const ServiceInfoShow = ({service}) => {
    const {serviceName,description,price,_id} =service;
    return (
       
     
          <div class="card cardProperty ms-5" style={{width: "20rem"}}>
        <img src={`data:image/jpeg;base64,${service?.image?.img}`} class="card-img-top pt-2" style={{height: "200px"}} alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{serviceName}</h5>
          <p class="card-text">{description}</p>
          <p style={{fontSize:"20px",fontWeight:"bold",color:"red"}} class="card-text">${price}</p>
          <Link to= {`/books/${_id}`}><button className="btn-design d-flex justify-content-center">Take Service</button></Link>
          
        </div>
      </div>
      
 

        
    );
};

export default ServiceInfoShow;