import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import swal from 'sweetalert';
import Detail from './Detail';
import { Grid } from '@material-ui/core';

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

const TableList = ({ titles, rows, cTitle }) => {
    const [showModal, setShowModal] = useState(false);
    const [detail, setDetail] = useState(null);

    const handleDetail = (detail) => {
        console.log(detail);
        setDetail(detail);
        setShowModal(true);

    }

    const handleClose = () => {
        setShowModal(false);
    }

    const handleEliminar = (item) => {
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
    const classes = useStyles();
    return (
        <>
            <Title>{cTitle}</Title>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs>
                    <Link color="primary" href="#" >
                        Crear Nuevo
                    </Link>

                </Grid>
            </Grid>
            <br />
            <br />
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        {
                            titles.map((title, i) => (
                                <TableCell key={i}>{title}</TableCell>
                            ))
                        }
                        <TableCell >Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        (rows || []).map((row, index) =>
                            <TableRow key={index}>
                                {
                                    Object.keys(row).map((k) => <TableCell key={k}>{
                                        typeof row[k] === 'boolean' ? row[k] ? "Sí" : "No" : row[k]
                                    }</TableCell>)
                                }
                                <TableCell >
                                    <Link color="primary" href="#" onClick={() => handleDetail(row)}>
                                        Detalle
                                    </Link> |
                                    <Link color="primary" href="#" onClick={() => handleEliminar(row)}>
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
                open={showModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={showModal}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title"></h2>
                        <p id="modal-description">
                            <Detail detail={detail} />
                        </p>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}

export default TableList;