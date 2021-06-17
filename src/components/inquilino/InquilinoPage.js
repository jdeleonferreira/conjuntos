import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import UsuarioList from "../usuario/UsuarioList";
import { Container, Row, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import * as api from "../../services/api.service";
import UsuarioForm from "../usuario/UsuarioForm";
import UsuarioDetalle from "../usuario/UsuarioDetalle";

const InquilinoPage = (props) => {
    const [usuarios, setUsuarios] = useState([]);
    const { url } = useRouteMatch();

    const filterInquilinos = (obj) => {
        return obj.role === 3;
    }

    useEffect(async () => {
        await api.getUsers().then((res) => {
            const data = res.data.filter(filterInquilinos);
            setUsuarios(data);
        });
    }, []);

    return (
        <>
            <Row>
                <h1>Inquilinos</h1>
            </Row>
            <Row>
                <Nav>
                    <Nav.Item>
                        <LinkContainer exact to='/inquilinos'>
                            <Nav.Link>Lista</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/inquilinos/nuevo">
                            <Nav.Link>Nuevo inquilino</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                </Nav>
            </Row>

            <Switch>
                <Route exact path="/inquilinos" >
                    <UsuarioList usuarios={usuarios} />
                </Route>
                <Route path="/inquilinos/nuevo" >
                    <UsuarioForm />
                </Route>
                <Route path="/inquilinos/detalle">
                    <UsuarioDetalle />
                </Route>
            </Switch>
        </>
    );
};


export default InquilinoPage;