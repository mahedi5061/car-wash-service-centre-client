import React from 'react';
import './Testimonial.css'

const Testimonial = ({ testimonial }) => {
    const { name, description, company } = testimonial;
    return (


        <div class="card mb-3 col-md-4 ms-5 cardProperty" style={{ maxWidth: "350px" }}>
            <div class=" g-0">
                <div class="">
                    <img src={`data:image/jpeg;base64,${testimonial?.image?.img}`} alt="" width="100px" style={{marginTop:"40%",marginLeft:"20%"}} alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <h5 class="card-title">{company}</h5>
                        <p class="card-text">{description}</p>
                         
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Testimonial;