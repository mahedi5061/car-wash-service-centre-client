import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Prescription from '../Dashboard/Prescription/Prescription';
import Sidebar from '../Sidebar/Sidebar';

const Prescriptions = () => {
   
    const [prescriptions,setPrescriptions]=useState([])
    useEffect(() => {
        fetch('http://localhost:7000/appointments')
            .then(res => res.json())
            .then(data => setPrescriptions(data))
    }, [prescriptions])
    
    return (
        <div className="container-fluid row" >
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">All Prescriptions</h5>
            <Prescription prescriptions={prescriptions} />
            
        </div>
    </div>
    );
};

export default Prescriptions;