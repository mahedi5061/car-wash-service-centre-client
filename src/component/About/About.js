import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const About = () => {
    return (
        <div className="container-fluid row">
        <div className="col-md-4">
        <Sidebar></Sidebar>
        </div>
            <div className="col-md-8 mt-3" style={{marginLeft:"-10%"}}>
            <h2 className="text-center mt-5">This Section is Comming......</h2>
            </div>
        </div>
         
    );
};

export default About;