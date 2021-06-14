import React from 'react';
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';

import { makeStyles } from '@material-ui/core/styles';


const schema = yup.object().shape({
    username: yup.string().required("El usuario es requerido!"),
    firstname: yup.string().required("El primer nombre es requerido!"),
    lastname: yup.string().required("El apellidos es requerido"),
    email: yup.string().email().required("El email es requerido"),
    password: yup.string().required("El password es requerido"),
    enable: yup.boolean().required(),
    role: yup.number().moreThan(0).required("El rol es requerido")
});


const UsuarioForm = (props) => {

    const handleOnSubmit = (values) => {

    }


    const classes = useStyles();


    return (
        <>
            <h2>Nuevo Usuario</h2>
            <Formik
                validationSchema={schema}
                onSubmit={handleOnSubmit}
                initialValues={{
                    username: '',
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    enable: true,
                    role: 0
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                    <Form className={classes.form} noValidate onSubmit={handleSubmit}>

                        role

                        <TextField
                            variant="outlined"
                            margin="normal"
                            name="username"
                            required
                            fullWidth
                            id="username"
                            label="Usuario"
                            autoComplete="email"
                            autoFocus
                            value={values.username}
                            onChange={handleChange}
                            error={touched.username && Boolean(errors.username)}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="firstName"
                            label="Nombre"
                            type="text"
                            id="firstName"
                            autoComplete="current-password"
                            value={values.firstName}
                            onChange={handleChange}
                            error={touched.firstName && Boolean(errors.firstName)}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="lastName"
                            label="Apellido"
                            type="text"
                            id="lastName"
                            autoComplete="current-password"
                            value={values.lastName}
                            onChange={handleChange}
                            error={touched.lastName && Boolean(errors.lastName)}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            name="email"
                            required
                            fullWidth
                            id="email"
                            label="email"
                            autoComplete="email"
                            autoFocus
                            value={values.email}
                            onChange={handleChange}
                            error={touched.email && Boolean(errors.email)}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={values.password}
                            onChange={handleChange}
                            error={touched.password && Boolean(errors.password)}
                        />

                        <FormControlLabel
                            control={
                                <Switch
                                    checked={values.enable}
                                    onChange={handleChange}
                                    name="enable"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            }
                            label="Activo?"
                        />



                        <Grid container>
                            <Grid item xs>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}>
                                    Guardar
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit} >
                                    Cancelar
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </>
    );

}




const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default UsuarioForm;