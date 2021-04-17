import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
 
import NavbarComponent from '../Navbar/NavbarComponent';
import ProfessionalWashing from '../ProfessionalWashing/ProfessionalWashing';
import './Header.css'

const Header = () => {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
           <HeaderMain></HeaderMain>
            <ProfessionalWashing></ProfessionalWashing>   
        </div>
    );
};

export default Header;