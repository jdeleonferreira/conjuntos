import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import UsuarioList from "./UsuarioList";
import { Container, Row, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import * as api from "../../services/api.service";
import UsuarioForm from "./UsuarioForm";
import UsuarioDetalle from "./UsuarioDetalle";

const UsuarioPage = (props) => {
    const [usuarios, setUsuarios] = useState([]);
    const { url } = useRouteMatch();

    useEffect(() => {
        api.getUsers().then((res) => {
            setUsuarios(res.data);
        });
    }, []);

    return (
        <>
            <Row>
                <h1>Usuarios</h1>
            </Row>
            <Row>
                <Nav>
                    <Nav.Item>
                        <LinkContainer exact to='/usuarios'>
                            <Nav.Link>Lista</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/usuarios/nuevo">
                            <Nav.Link>Nuevo usuario</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                </Nav>
            </Row>

            <Switch>
                <Route exact path="/usuarios" >
                    <UsuarioList usuarios={usuarios} />
                </Route>
                <Route path="/usuarios/nuevo" >
                    <UsuarioForm />
                </Route>
                <Route path="/usuarios/detalle">
                    <UsuarioDetalle />
                </Route>
            </Switch>
        </>
    );
};


export default UsuarioPage;