
import Menu from "../common/Manu";
import { Row, Container, Col } from "react-bootstrap";


import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import UsuarioPage from "../usuario/UsuarioPage";
import TorrePage from "../torres/TorrePage";
import ApartamentoPage from "../apartamento/ApartamentoPage";

const Home = () => {


    return (
        <Container >
            <Row>
                <Col sm={3} lg={3}><Menu /></Col>
                <Col sm={9} lg={9}>
                    <Switch>
                        <Route path="/" component={UsuarioPage}></Route>
                        <Route path="/torres" component={TorrePage}></Route>
                        <Route path="/apartamentos" component={ApartamentoPage} ></Route>
                        <Route path="/inquilinos"></Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;