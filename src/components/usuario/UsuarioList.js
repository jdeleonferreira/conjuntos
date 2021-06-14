import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../common/Title';

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

const UsuarioList = ({ usuarios }) => {
    const classes = useStyles();
    return (

        <>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Apellido</TableCell>
                        <TableCell>Correo</TableCell>
                        <TableCell>Activo</TableCell>
                        <TableCell colSpan="2">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        usuarios.map((usuario, index) =>
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{usuario.firstname}</TableCell>
                                <TableCell>{usuario.lastname}</TableCell>
                                <TableCell>{usuario.email}</TableCell>
                                <TableCell>{usuario.enable ? "Sí" : "No"}</TableCell>
                                <TableCell>
                                    <Link color="primary" href="#" >
                                        See more orders
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link color="primary" href="#" >
                                        See more orders
                                    </Link>
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </>

    );

}

export default UsuarioList;