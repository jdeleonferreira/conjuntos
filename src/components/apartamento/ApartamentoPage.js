import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { Container, Row, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import * as api from "../../services/api.service";
import ApartamentoList from "./ApartamentoList";

const ApartamentoPage = (props) => {
    const [apartamentos, setApartamentos] = useState([]);
    const { url } = useRouteMatch();

    useEffect(() => {
        api.getApartamentos().then((res) => {
            setApartamentos(res.data);
        });
    }, []);

    return (
        <Container>
            <Row>
                <h1>Apartamentos</h1>
            </Row>
            <Row>
                <Nav>
                    <Nav.Item>
                        <LinkContainer to="/apartamentos">
                            <Nav.Link>Lista</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/apartamentos/nuevo">
                            <Nav.Link>Nueva Apartamento</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                </Nav>
            </Row>

            <Switch>
                <Route exact path="/apartamentos">
                    <ApartamentoList apartamentos={apartamentos} />
                </Route>
                <Route path="/apartamentos/new"></Route>
                <Route path="/apartamentos/detalle"></Route>
            </Switch>
        </Container>
    );
};


export default ApartamentoPage;