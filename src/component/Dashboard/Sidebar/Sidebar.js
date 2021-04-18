import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt, faUserPlus, faCartPlus, faList, faCommentDots, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../../App';


const Sidebar = () => {
    const [login, setLogin] = useContext(userContext)
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://shrouded-lake-27228.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: login.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="   sidebarDesign  justify-content-between  col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li style={{textDecoration: "none"}}>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>

               {
                isAdmin ? <div>
                   <li>
                    <Link to="/orderlists" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                    </Link>
                </li>
                
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
              
          
           
                   </div>:
                   <div>
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
                   </div>
                   
               }
               </ul>
            <div>

                {
                    login.email ? <Link to="/dashboard"><span onClick={() => setLogin({})} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> {login.name}</span> </Link> : <Link to="/login"><span onClick={() => setLogin(login)} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> Login</span></Link>
                }


            </div>
        </div>
    );
};

export default Sidebar;