import React, { useContext, useEffect, useState } from 'react';
import  AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
 import Sidebar from '../Sidebar/Sidebar';
 
 
 import {userContext} from '../../../App'

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
     const [login, setLogin]=useContext(userContext)
    
    const [appointments, setAppointments] = useState([]);
    
    console.log(login.email)
    
    
    useEffect(() => {
        fetch('http://localhost:7000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: login.email})
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <section>
        
            <div style={containerStyle} className="row">
              
                <div className="col-md-4 ">
                    <Sidebar></Sidebar>
                </div>
                 
                <div className="col-md-4 ">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;