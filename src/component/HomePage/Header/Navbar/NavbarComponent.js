import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';
import Autocare from '../../../../images/autocare.png'

const NavbarComponent = () => {
    return (
        <div>
        <Navbar  expand="lg">
            <Link className="navbar-brand ms-5" to="/"> <img src={Autocare} style={{width:"70px"}}></img></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navbar">
                        <Nav.Link><Link to="/home"  className="ms-5 nv">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about"  className="ms-5 nv">About</Link></Nav.Link>
                        <Nav.Link><Link to="/service"  className="ms-5 nv">Services</Link></Nav.Link>
                        <Nav.Link><Link to="/dashboard"  className="ms-5 nv  ">Dashboard</Link></Nav.Link>
                        
                        <Nav.Link><Link to="/contact"  className="ms-5 nv  ">Contact Us</Link></Nav.Link>
                         
                    </Nav>
            </Navbar.Collapse>
            </Navbar> 
        </div>
    );
};

export default NavbarComponent;