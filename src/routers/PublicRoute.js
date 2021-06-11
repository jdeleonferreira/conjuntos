import { Route, Redirect } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PublicRoute = ({ component: Component, ...rest }) => {
    const auth = useAuth();

    return (
        <Route {...rest}>
            {!auth.isLogged() ? (
                <Component />
            ) : (
                <Redirect to="/login" />
            )}
        </Route>
    );
}

export default PublicRoute;