import { userContext } from '../../App';
import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const BookingList = () => {
    const [login, setLogin]=useContext(userContext)
    const [orderProducts,setOrderProduct]=useState([])
    useEffect(() => {
        fetch('https://shrouded-lake-27228.herokuapp.com/showCustomersOrder?email='+login.email)
        .then(res=>res.json())
        .then(data=>setOrderProduct(data))
    },[])
     
    return (
        <div className="container-fluid row">
        <div className="col-md-4">
            <Sidebar></Sidebar>
        </div>
            
            <div className="col-md-8 tableData">
            <h4 className="text-center pb-3" style={{color:"green"}}>Your Total Order is {orderProducts.length}</h4>
            <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col"><h5>SL No</h5></th>
            <th className="text-secondary" scope="col"><h5>Name</h5></th>
            <th className="text-secondary" scope="col"><h5>Email</h5></th>
            <th className="text-secondary" scope="col"><h5>Address</h5></th>
            <th className="text-secondary" scope="col"><h5>Pay with</h5></th>
            <th className="text-secondary" scope="col"><h5>Phone</h5></th>
            <th className="text-secondary" scope="col"><h5>Status</h5></th>
             
            </tr>
        </thead>
        <tbody>
            {
                orderProducts.map((pd, index) => 
                    
                <tr>
                    <td><h5>{index + 1}</h5></td>
                    <td><h5>{pd?.shipment?.name}</h5></td>
                    <td><h5>{pd?.shipment?.email}</h5></td>
                    <td><h5>{pd?.shipment?.address}</h5></td>
                    <td><h5>{pd?.paymentId}</h5></td>
                    <td><h5>{pd?.shipment?.phone}</h5></td>
                    <td  >
                            
                            <select>
                                <option   className="text-white p-5" style={{backgroundColor:'orange'}}>Pending</option>
                                <option  style={{backgroundColor:'green'}} className="text-white p-5">Approved</option>
                                <option style={{backgroundColor:'red'}} className="  text-white p-5">Rejected</option>
                            </select>
 
                        </td>
                     
                </tr>
                )
            }
        </tbody>
    </table>

            </div>
            </div>
        
    );
};

export default BookingList;