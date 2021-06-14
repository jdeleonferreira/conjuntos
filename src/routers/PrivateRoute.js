import { Redirect, Route, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";


const PrivateRoute = ({ comp: Component, ...rest }) => {

    const auth = useAuth();
    const location = useLocation();

    return (
        <Route {...rest} >
            {auth.isLogged() ? <Component /> : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
        </Route>
    );
};

export default PrivateRoute;