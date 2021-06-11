import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import ApartamentoPage from "../components/apartamento/ApartamentoPage";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import UsuarioPage from "../components/usuario/UsuarioPage";
import TorrePage from "../components/torres/TorrePage";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login" component={Login} />
                <Route exact path="/apartamentos" component={ApartamentoPage} />
                <Route exact path="/usuarios" component={UsuarioPage} />
                <Route exact path="/torres" component={TorrePage} />
                <Route exact path="/inquilinos" component={UsuarioPage} />
                <Route exact path="/home" component={Home} />
                <Route path="*">
                    <Redirect to="/login" />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;