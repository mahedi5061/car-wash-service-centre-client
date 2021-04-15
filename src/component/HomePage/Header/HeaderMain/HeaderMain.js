import React from 'react';
import carMainPic from '../../../../images/car.jpg';
import './HeaderMain.css';
 
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
 
 

const HeaderMain = () => {
    
    return (
        <main  style={{height:"850px"}}  className="row d-flex align-items-center">
         
        <div className="col-12">
        <img src={carMainPic} className="imageSize "></img>

        </div>
            
        </main>
    );
};
 
export default HeaderMain;