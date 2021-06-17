import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { Container, Row, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import * as api from "../../services/api.service";
import ApartamentoList from "./ApartamentoList";
import ApartamentoForm from "./ApartamentoForm";

import TableList from "../common/TableList";

const ApartamentoPage = (props) => {
    const [apartamentos, setApartamentos] = useState([]);
    const { path, url } = useRouteMatch();

    useEffect(() => {
        api.getApartamentos().then((res) => {
            setApartamentos(res.data);
        });
    }, []);

    return (
        <Container>
            <Row>
                <TableList titles={['Torre', 'Piso', 'Área', 'En arriendo', 'Fecha Creación', 'Usuario Creación']} rows={apartamentos} cTitle={'Apartamentos'} />
            </Row>
        </Container>
    );
};


export default ApartamentoPage;