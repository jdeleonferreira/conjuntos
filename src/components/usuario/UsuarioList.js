import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faAdjust } from "@fortawesome/free-solid-svg-icons";
import { Button, Table, Spinner, Modal } from "react-bootstrap";

const UsuarioList = ({ usuarios }) => {

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Activo</th>
                        <th colSpan="2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.length > 0 ? (
                        usuarios.map((usuario, index) => (
                            <tr key={usuario.id}>
                                <td>{index + 1}</td>
                                <td>{usuario.firstname}</td>
                                <td>{usuario.lastname}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.enable ? "Sí" : "No"}</td>
                                <td>
                                    <Button>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Button>
                                </td>
                                <td>
                                    <Button>
                                        <FontAwesomeIcon icon={faAdjust} />
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No data</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );

}

export default UsuarioList;