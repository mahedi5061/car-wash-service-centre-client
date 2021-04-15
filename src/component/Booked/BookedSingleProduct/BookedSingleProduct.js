import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const BookedSingleProduct = () => {
    const {id}=useParams();
    const [userServices,setUserServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/allProduct')
        .then(res=>res.json())
        .then(data =>{
            setUserServices(data)
        })
    },[id])
    const userDataById=userServices.find(userService=>userService._id===id);
     console.log(userDataById)
    return (
        <div className="row d-flex justify-content-center mt-5">
         <div class="card col-md-3 cardProperty ms-5" style={{width: "20rem"}}>
        <img src={`data:image/jpeg;base64,${userDataById?.image?.img}`} class="card-img-top pt-2" style={{height: "300px"}} alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{userDataById?.serviceName}</h5>
          <p class="card-text">{userDataById?.description}</p>
          <p style={{fontSize:"20px",fontWeight:"bold",color:"red"}} class="card-text">${userDataById?.price}</p>
          <Link to="/books"><button className="btn-design d-flex justify-content-center">Service Replace</button></Link>
          
        </div>
      </div>

        </div>
    );
};

export default BookedSingleProduct;