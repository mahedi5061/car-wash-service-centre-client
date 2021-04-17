import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faSignOutAlt,faUserPlus, faFileMedicalAlt, faCalendar, faGripHorizontal, faUsers, faCartPlus, faList, faCommentDots, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../../App';
 

const Sidebar = () => {
    const [login,setLogin]=useContext(userContext)
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: login.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar  justify-content-between  col-md-5 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled">
        <li>
                <Link to="/home" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span> 
                </Link>
            </li>

            <li>
                <Link to="/book" className="text-white">
                    <FontAwesomeIcon icon={faCartPlus} /> <span>Book</span> 
                </Link>
            </li>
            
                <li>
                <Link to="/booklists" className="text-white">
                    <FontAwesomeIcon icon={faList} /> <span>Booking List</span> 
                </Link>
            </li>
            <li>
                <Link to="/review" className="text-white">
                    <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                </Link>
            </li>
            <li>
                <Link to="/orderlists" className="text-white">
                    <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                </Link>
            </li>
           {/* {
               isAdmin && <div> */}
               <li>
                <Link to="/addService" className="text-white">
                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                </Link>
            </li>

            <li>
                <Link to="/addAdmin" className="text-white">
                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                </Link>
            </li>
            
            <li>
                <Link to="/manageservice" className="text-white" >
                  <FontAwesomeIcon icon={faThLarge} /> <span>Manage Service</span>
                </Link>
            </li>
               {/* </div>
           } */}
        </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default Sidebar;