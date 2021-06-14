import { Router, Switch } from 'react-router-dom';
import UsuarioPage from '../components/usuario/UsuarioPage';

const UsuarioRouter = () => {
    return (
        <Switch>
            <Router to='/usuarios' >
                <UsuarioPage />
            </Router>
        </Switch>)
}

export default UsuarioRouter;