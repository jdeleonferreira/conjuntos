import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import swal from 'sweetalert';
import UsuarioDetalle from './UsuarioDetalle';

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const UsuarioList = ({ usuarios }) => {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null);


    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEliminar = (usuario) => {
        swal({
            title: "Está seguro?",
            text: "Una vez elminaro, no podras recuerpar el usuario!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("El usuario ha sido eliminado!", {
                        icon: "success",
                    });
                } else {
                    swal("El usuario está a salvo!");
                }
            });
    }

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
                                    <Link color="primary" onClick={() => { handleOpen(); setUser(usuario); }} href="#" >
                                        Detalle
                                    </Link> |
                                    <Link color="primary" href="#" onClick={() => { handleEliminar(usuario) }} >
                                        Eliminar
                                    </Link>
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Usuario: {user?.firstname + " " + user?.lastname}</h2>
                        <p id="modal-description">
                            <UsuarioDetalle user={user} />
                        </p>
                    </div>
                </Fade>
            </Modal>
        </>

    );

}

export default UsuarioList;