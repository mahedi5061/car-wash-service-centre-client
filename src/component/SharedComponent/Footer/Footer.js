import React from 'react';
import FooterColumn from '../FooterColumn/FooterColumn';
 
import './Footer.css';
import Aqualine from '../../../images/autocare.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
 
 

const Footer = () => {
    const noNamed = [
        {name: "0 (550) 680-34-12" , link: "Round-the-clock"},
        {name: "Round-the-clock" }
        
    ]
    const ourAddress = [
        {name: "Dhaka - 1200"  },
        {name: "Mirpur-10"},
       
    ]
    
    const services = [
        {name: "Car Washing Point"},
        {name: "1353 Locust St, Kansas City" }
    ]
    return (
        <footer className="footer-area  clear-both">
           <div className="text-center" >
           <Link to="/"><img src={Aqualine} style={{width:"100px"}}></img></Link>
           <p className="text-white mt-3">
Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</p>
           </div>
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterColumn key={1} menuTitle={""} menuItems={noNamed}/>
                    <FooterColumn key={2} menuTitle="Services" menuItems={services}/>
                     
                    <FooterColumn key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        
                        <div className="mt-5">
                            <h6 className="text-white"><FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon> Call now</h6>
                            <button className="contactNumber">+88-01615742473</button>
                        </div>
                    </FooterColumn>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;