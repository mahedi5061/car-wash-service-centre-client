import React from 'react';
import './Locations.css';
import washMachine from '../../../images/wash-machine.png'
const Locations = () => {
    return (
        <section className="location d-flex justify-content-center  ">
        <div className="container row ">
            <div className="col-md-4 col-md-offset-2">
                  <img src={washMachine} style={{width:"350px"}} ></img>
            </div>
            <div className="col-md-4"  >
                <h5 className="text">---Locations</h5>
                <h1 className="carwash">Car Washing and Care Points</h1><br></br>
                <h5>car washing point</h5>
                <p>1353 Locust St, Kansas City, MO 64106</p>
                 
                <h5>car washing point</h5>
                <p>1353 Locust St, Kansas City, MO 64106</p>
                
                <h5>car washing point</h5>
                <p>1353 Locust St, Kansas City, MO 64106</p>
            </div>
            
            <div className="col-md-4"  >
                <form action="" >
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address *"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject *"/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id=""  placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button type="button" className="submit"> SUBMIT </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Locations;