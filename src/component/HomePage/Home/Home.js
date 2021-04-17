import React from 'react';
 import Footer from './../../SharedComponent/Footer/Footer'
import Header from '../Header/Header/Header';
 
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Locations from '../Locations/Locations';
import OnlineStores from '../OnlineStores/OnlineStores';

const Home = () => {
    return (
         <>
              <Header></Header>
              <Services></Services>
              <Locations></Locations>
              <Testimonials></Testimonials>
              <OnlineStores></OnlineStores>
              <Footer></Footer>
         </>
    );
};

export default Home;