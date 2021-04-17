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
 
export const userContext = createContext();
export const userOrder=createContext();

function App() {
  const [login, setLogin] = useState({});
  const [userServices,setUserServices] = useState([]);
   
  useEffect(() => {
    fetch('http://localhost:8000/allProduct')
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
           <Route path="/dashboard">
             <Dashboard></Dashboard>
           </Route>
           
           <Route path="/addService">
          <AddService></AddService>
           </Route>
          <Route path="/review">
            <Review></Review>
          </Route>

          <Route path="/books/:id">
            <Books></Books>
          </Route>

          <Route path="/orderlists">
             <OrderList></OrderList>
          </Route>

          <Route path="/book">
            <Book></Book>
          </Route>

          <Route path="/manageservice">
              <ManageService></ManageService>
          </Route>

          <Route path="/addAdmin">
            <Admin></Admin>
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
