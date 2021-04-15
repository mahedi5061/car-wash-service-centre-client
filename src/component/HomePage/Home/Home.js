import React from 'react';
 import Footer from './../../SharedComponent/Footer/Footer'
import Header from '../Header/Header/Header';
 
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Locations from '../Locations/Locations';

const Home = () => {
    return (
         <>
              <Header></Header>
              <Services></Services>
              <Locations></Locations>
              <Testimonials></Testimonials>
              <Footer></Footer>
         </>
    );
};

export default Home;