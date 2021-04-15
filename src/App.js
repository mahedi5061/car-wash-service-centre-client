import React, { createContext, useState } from "react";
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
import BookedSingleProduct from "./component/Booked/BookedSingleProduct/BookedSingleProduct";
export const userContext = createContext();

function App() {
  const [login, setLogin] = useState({});
  return (
    <userContext.Provider value={[login, setLogin]}>
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
           
           <Route path="/addDoctor">
          <AddService></AddService>
           </Route>
          <Route path="/review">
            <Review></Review>
          </Route>

          <Route path="/books">
            <Books></Books>
          </Route>

          <Route path="/booklists">
             <BookLists></BookLists>
          </Route>

          <Route path="/bookService/:id">
              <BookedSingleProduct></BookedSingleProduct>
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
       </userContext.Provider>
  );
}

export default App;
