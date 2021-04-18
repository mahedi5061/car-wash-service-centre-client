import React, { useContext, useState } from 'react';
import { userOrder } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ManageService.css'

const ManageService = () => {
    const [userServices,setUserServices] = useContext(userOrder);
    const [deleteItem,setDeleteItem]=useState("")
    const deleteService=(id) => {
        fetch('https://shrouded-lake-27228.herokuapp.com/productDelete/'+id,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            setDeleteItem("Your Item is Deleted Successfully!!")
        })
    }
    return (
        <div className="container-fluid row">
             <div className="col-md-4">
                 <Sidebar></Sidebar>
             </div>
             <div className="col-md-8">
             <h3 className="manageService">All Services</h3>
             <h3 className="text-center" style={{color: 'green'}}>{deleteItem}</h3>
             <table className="table table-borderless tableData">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col"><h5>Sr No</h5></th>
            <th className="text-secondary" scope="col"><h5>Service Name</h5></th>
            <th className="text-secondary" scope="col"><h5>Price</h5></th>
            <th className="text-secondary" scope="col"><h5>Action</h5></th>
             
            </tr>
        </thead>
        <tbody>
            {
                userServices.map((pd, index) => 
                    
                <tr>
                    <td><h5>{index + 1}</h5></td>
                    <td><h5>{pd?.serviceName}</h5></td>
                    <td><h5>{pd?.price}</h5></td>
                    <td><h5><FontAwesomeIcon icon={faTrash} onClick={()=>{deleteService(pd?._id)}} className="deleteBtn"></FontAwesomeIcon></h5></td>
                     
                </tr>
                )
            }
        </tbody>
    </table>
             </div>
        </div>
    );
};

export default ManageService;