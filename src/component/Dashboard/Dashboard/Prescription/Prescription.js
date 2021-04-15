import React, { useEffect, useState } from 'react';
 
import ModalForPrescription from '../ModalForPrescription/ModalForPrescription';
const Prescription = ({prescriptions}) => {
const [modalIsOpen,setIsOpen] = useState(false);
const [allPatientData,setAllPatientData] = useState([]);
const [selectedPatient,setSelectedPatient] = useState(null);

useEffect(() => {
       fetch('http://localhost:7000/appointments') 
       .then(res => res.json())
       .then(data => setAllPatientData(data))
},[])
    
const handleViewPatient=(viewId) => {
    setIsOpen(true);
    const viewPatientId = allPatientData.find(patientData => patientData._id === viewId);
    setSelectedPatient(viewPatientId);

}
  
    const closeModal=()=>{
      setIsOpen(false);
    }
   
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Date</th>
            <th className="text-secondary" scope="col">Phone</th>
            <th className="text-secondary" scope="col">Prescription</th>
             
            </tr>
        </thead>
        <tbody>
            {
                prescriptions.map((prescription, index) =>  
                 
                    
                <tr>
                    <td><h6>{index + 1}</h6></td>
                    <td><h6>{prescription.name}</h6></td>
                    <td><h6>{new Date(prescription.date).toDateString('dd/MM/yyyy')}</h6></td>
                    <td><h6>{prescription.phone}</h6></td>
                    <td> <button onClick={()=>{handleViewPatient(prescription._id)}} className="btn-brand">view</button></td>
                     
                </tr>
                
                )
                  
            }
            <ModalForPrescription modalIsOpen={modalIsOpen} closeModal={closeModal} selectedPatient={selectedPatient}></ModalForPrescription>
        </tbody>
    </table>
    );
};

export default Prescription;