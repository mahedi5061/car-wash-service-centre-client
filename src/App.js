import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddService from "./component/AddService/AddService";
 
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
 
import Home from "./component/HomePage/Home/Home";
import Login from "./component/Login/Login";
import Review from "./component/Review/Review";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Books from "./component/Booked/Books/Books";
 
import OrderList from "./component/Booked/OrderList/OrderList";
import Book from "./component/Booked/Book/Book";
import ManageService from "./component/ManageService/ManageService";
import Admin from "./component/Admin/Admin";
import BookingList from "./component/BookingList/BookingList";
import ServiceNavbar from "./component/ServiceNavbar/ServiceNavbar";
import About from "./component/About/About";
 
export const userContext = createContext();
export const userOrder=createContext();

function App() {
  const [login, setLogin] = useState({});
  const [userServices,setUserServices] = useState([]);
   
  useEffect(() => {
    fetch('https://shrouded-lake-27228.herokuapp.com/allProduct')
    .then(res=>res.json())
    .then(data =>{
        setUserServices(data)
    })
},[])

  return (
    <userContext.Provider value={[login, setLogin]}>
    <userOrder.Provider value={[userServices,setUserServices]}>
       <Router>
         <Switch>
           <Route path="/home">
             <Home></Home>
           </Route>
            
           <Route path="/login">
             <Login></Login>
           </Route>
           <PrivateRoute path="/dashboard">
             <Dashboard></Dashboard>
           </PrivateRoute>
           
           <Route path="/addService">
          <AddService></AddService>
           </Route>
          <Route path="/review">
            <Review></Review>
          </Route>

          <Route path="/books/:id">
            <Books></Books>
          </Route>

          <PrivateRoute path="/orderlists">
             <OrderList></OrderList>
          </PrivateRoute>

          <PrivateRoute path="/booklists">
            <BookingList></BookingList>
          </PrivateRoute>

          <Route path="/book">
            <Book></Book>
          </Route>

          <Route path="/manageservice">
              <ManageService></ManageService>
          </Route>

          <Route path="/addAdmin">
            <Admin></Admin>
          </Route>
 
      <Route path="/service">
        <ServiceNavbar></ServiceNavbar>
      </Route>
          <Route path="/about">
            <About></About>
          </Route>
           <Route exact path="/">
             <Home></Home>
           </Route>
         </Switch>
       </Router>
       </userOrder.Provider>
       </userContext.Provider>
  );
}

export default App;
