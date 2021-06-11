import { Redirect, Route } from "react-router-dom";
import useAuth from "../auth/useAuth";


const PrivateRoute = ({ component: Component, ...rest }) => {

    const auth = useAuth();
    console.log("user Logged: ");
    console.log(auth.isLogged());
    return (
        <Route {...rest} >
            {auth.isLogged() ? <Component /> : <Redirect to="/login" />}
        </Route>
    );
};

export default PrivateRoute;