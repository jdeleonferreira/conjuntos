import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faAdjust } from "@fortawesome/free-solid-svg-icons";
import { Button, Table, Spinner, Modal } from "react-bootstrap";

const TorreList = ({ torres }) => {

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Torre</th>
                        <th>N° Pisos</th>
                        <th>Con elevador</th>
                        <th colSpan="2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {torres.length > 0 ? (
                        torres.map((torre, index) => (
                            <tr key={torre.id}>
                                <td>{index + 1}</td>
                                <td>{torre.name}</td>
                                <td>{torre.floorsquantity}</td>
                                <td>{torre.haselevator ? "Sí" : "No"}</td>
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

export default TorreList;