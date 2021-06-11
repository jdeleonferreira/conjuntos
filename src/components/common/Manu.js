import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";



const Menu = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/usuarios">Gestión de usuarios</Nav.Link>
            <Nav.Link href="/torres">Gestión de torres</Nav.Link>
            <Nav.Link href="/apartamentos">Gestión de apartamentos</Nav.Link>
            <Nav.Link href="/inquilinos">Gestión de inquilinos</Nav.Link>
        </Nav>
    );
}


export default Menu;