import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
 
import jwt_decode from "jwt-decode";
import { userContext } from '../../App';
 

const PrivateRoute = ({children, ...rest}) => {
    const [login, setLogin] = useContext(userContext);
    
    const isLoggedIn = () => {
      const token = sessionStorage.getItem('token');
      if(!token){
        return false;
      }
      const decodedToken = jwt_decode(token);
      
      const currentTime = new Date().getTime() / 1000;
      
      return decodedToken.exp > currentTime;
    }
   
    return (
        <Route
      {...rest}
      render={({ location }) =>
        (login.email  || isLoggedIn()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;