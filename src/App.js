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
import Prescriptions from "./component/Dashboard/Prescriptions/Prescriptions";
import Home from "./component/HomePage/Home/Home";
import Login from "./component/Login/Login";
import Review from "./component/Review/Review";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Books from "./component/Booked/Books/Books";
 
import BookLists from "./component/Booked/BooksList/BookLists";
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
           <PrivateRoute path="/dashboard">
             <Dashboard></Dashboard>
           </PrivateRoute>
           
           <Route path="/addDoctor">
          <AddService></AddService>
           </Route>
          <Route path="/review">
            <Review></Review>
          </Route>

          <PrivateRoute path="/books/:id">
            <Books></Books>
          </PrivateRoute>

          <PrivateRoute path="/booklists">
             <BookLists></BookLists>
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
 
          <Route path="/prescriptions">
            <Prescriptions></Prescriptions>
          </Route>

          <Route path="/prescriptions/:id">
            <Prescriptions></Prescriptions>
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
