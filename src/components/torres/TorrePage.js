import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { Container, Row, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import * as api from "../../services/api.service";
import TorreList from "./TorreList";

const TorrePage = (props) => {
    const [torres, setTorres] = useState([]);
    const { url } = useRouteMatch();

    useEffect(() => {
        api.getTorres().then((res) => {
            setTorres(res.data);
        });
    }, []);

    return (
        <Container>
            <Row>
                <h1>Torres</h1>
            </Row>
            <Row>
                <Nav>
                    <Nav.Item>
                        <LinkContainer to="/torres">
                            <Nav.Link>Lista</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/torres/nuevo">
                            <Nav.Link>Nueva torre</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                </Nav>
            </Row>

            <Switch>
                <Route exact path="/torres">
                    <TorreList torres={torres} />
                </Route>
                <Route path="/torres/new"></Route>
                <Route path="/torres/detalle"></Route>
            </Switch>
        </Container>
    );
};


export default TorrePage;