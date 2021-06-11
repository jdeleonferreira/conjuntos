import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import UsuarioList from "./UsuarioList";
import { Container, Row, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import * as api from "../../services/api.service";

const UsuarioPage = (props) => {
    const [usuarios, setUsuarios] = useState([]);
    const { url } = useRouteMatch();

    useEffect(() => {
        api.getUsers().then((res) => {

            setUsuarios(res.data);
            console.log(usuarios);
        });
    }, []);

    return (
        <Container>
            <Row>
                <h1>Usuarios</h1>
            </Row>
            <Row>
                <Nav>
                    <Nav.Item>
                        <LinkContainer to="/usuarios">
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
                <Route exact path="/usuarios">
                    <UsuarioList usuarios={usuarios} />
                </Route>
                <Route path="/usuarios/new">

                </Route>
                <Route path="/usuarios/detalle"></Route>
            </Switch>
        </Container>
    );
};


export default UsuarioPage;