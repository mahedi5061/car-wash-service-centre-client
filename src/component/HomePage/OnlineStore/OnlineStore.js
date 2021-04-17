import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const OnlineStore = (props) => {
    const {title, description, price,img} = props.store;
    return (
     

    <div class="card cardProperty ms-5" style={{width: "20rem"}}>
    <img src={img} class="card-img-top pt-2" style={{height: "200px"}} alt="..."/>
    <div class="card-body">
      <h3 class="card-title">{title}</h3>
      <p class="card-text">{description}</p>
      <p style={{fontSize:"20px",fontWeight:"bold",color:"red"}} class="card-text">${price}</p>
      <Link to="/book"><button className="btn-design  justify-content-center">Add to Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button></Link>
      
    </div>
  </div>
    );
};

export default OnlineStore;