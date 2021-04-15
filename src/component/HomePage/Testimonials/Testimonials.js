import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
 

const Testimonials = () => {
    const [testimonials,setTestimonials]=useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/reviews')
        .then(res=>res.json())
        .then(data =>setTestimonials(data))
    },[])
    
    return (
        <section className=" my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text text-uppercase">T e s t i m o n i a l</h5>
                   <h1 className="customerSays">What Our Clients Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;