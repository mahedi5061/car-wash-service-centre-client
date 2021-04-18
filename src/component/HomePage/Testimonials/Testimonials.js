import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
 

const Testimonials = () => {
    const [testimonials,setTestimonials]=useState([]);
    useEffect(() => {
        fetch('https://shrouded-lake-27228.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data =>setTestimonials(data))
    },[])
    
    return (
        <section className=" my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text text-center text-uppercase">T e s t i m o n i a l</h5>
                   <h1 className="customerSays text-center">What Our Clients Says </h1>
               </div>
               <div className="card-deck mt-5 row">
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;