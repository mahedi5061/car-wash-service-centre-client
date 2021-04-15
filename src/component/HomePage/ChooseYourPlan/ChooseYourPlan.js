import React from 'react';
import './ChooseYourPlan.css';
import car1 from '../../../images/car_01.png';
import car2 from '../../../images/car_02.png';
import car3 from '../../../images/car_03.png';
import car4 from '../../../images/car_04.png'

const MakeAppointment = () => {
    return (
        <section>
            <div className="container">
                <div>
                    <div className=" text-center">
                        <h5 className="washing text-uppercase ">W A S H I N G <span className="ms-1">P R I C E</span></h5>
                    </div>
                    <div className="text-center">

                        <h1 className="my-4 choose">Choose Your Plan</h1>
                        <p>Sed non dapibus dolor, non rhoncus dui. Ut eleifend justo at ipsum aliquam, vel cursus tellus pulvinar. Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt, enim lorem scelerisque massa, vel ultricies.!</p>

                    </div>
                    <div className="row">
                        <div className="col-3">
                        <img src={car1} style={{width:'250px'}}></img>
                        </div>
                        <div className="col-3">
                        <img src={car2} style={{width:'250px'}}></img>
                        </div>
                        <div className="col-3">
                        <img src={car3} style={{width:'250px'}}></img>
                        </div>
                        <div className="col-3">
                        <img src={car4} style={{width:'250px'}}></img>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;