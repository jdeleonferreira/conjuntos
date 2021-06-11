import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faAdjust } from "@fortawesome/free-solid-svg-icons";
import { Button, Table, Spinner, Modal } from "react-bootstrap";

const ApartamentoList = ({ apartamentos }) => {

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Torre</th>
                        <th>Area</th>
                        <th>N° Apto</th>
                        <th>En Arriendo</th>
                        <th colSpan="2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {apartamentos.length > 0 ? (
                        apartamentos.map((apartamento, index) => (
                            <tr key={apartamento.id}>
                                <td>{index + 1}</td>
                                <td>{apartamento.building}</td>
                                <td>{apartamento.area}</td>
                                <td>{apartamento.apatmentnumber}</td>
                                <td>{apartamento.istaken ? "Sí" : "No"}</td>
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

export default ApartamentoList;