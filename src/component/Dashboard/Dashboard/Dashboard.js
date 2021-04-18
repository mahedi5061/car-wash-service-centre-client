import React, { useContext, useEffect, useState } from 'react';
 
 import Sidebar from '../Sidebar/Sidebar';
 
 
 
const Dashboard = () => {
     

    return (
        <section>
        
            <div className="row container-fluid">
              
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                 
                <div className="col-md-4 ">
                     <h2 className="text-center mt-5" style={{color: 'green',fontSize:"25px",fontWeight:"bold"}}>Welcome to our Dashboard</h2>
                     
                </div>
            </div>
            
        </section>
    );
};

export default Dashboard;