import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Services from '../HomePage/Services/Services';

const ServiceNavbar = () => {
    return (
        <div className="container-fluid row">
        <div className="col-md-4">
        <Sidebar></Sidebar>
        </div>
            <div className="col-md-8" style={{marginLeft:"-10%"}}>
            <Services></Services>
            </div>
        </div>
    );
};

export default ServiceNavbar;