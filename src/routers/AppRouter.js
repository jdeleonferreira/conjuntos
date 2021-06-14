import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";

import Home from "../components/home/Home";
import Login from "../components/login/Login";
import UsuarioPage from "../components/usuario/UsuarioPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import UsuarioRouter from "./UsuarioRouter";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path='/login' comp={Login} />
                <PrivateRoute path='/' comp={Home} />
                <Route path='*' Redirect='/login' />
            </Switch>
        </Router>
    );
}

export default AppRouter;