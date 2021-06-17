import React, { useEffect, useState } from 'react';
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import * as api from "../../services/api.service";
import swal from 'sweetalert';
import { Redirect, useHistory } from 'react-router';

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
    const [roles, setRoles] = useState([]);
    const history = useHistory();

    useEffect(
        async () => {
            await api.getRoles().then(
                (res) => {
                    setRoles(res.data);
                }
            )
        }, []);

    const handleOnSubmit = (values) => {

        api.postUser({
            username: values.username,
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            password: values.password,
            enable: values.enable,
            role: values.role
        })
            .then((res) => {
                swal("Usuario creado", "El usuario ha sido creado exitosamente", "success")
                    .then(() => {
                        history.push("/usuarios")
                    });

            })
            .catch((err) => {
                swal("Error", "Hubo un error al crear el usuario", "error");
            });
    }

    const classes = useStyles();


    return (
        <>
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

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="role"
                            value={values.role}
                            onChange={handleChange}
                            error={touched.role && Boolean(errors.role)} >
                            <MenuItem value={0}>Seleccione una opción</MenuItem>
                            {
                                roles.map(rol => <MenuItem value={rol.id}>{rol.rolname}</MenuItem>)
                            }
                        </Select>

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
                            name="firstname"
                            label="Nombre"
                            type="text"
                            id="firstname"
                            autoComplete="current-password"
                            value={values.firstname}
                            onChange={handleChange}
                            error={touched.firstname && Boolean(errors.firstname)}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="lastname"
                            label="Apellido"
                            type="text"
                            id="lastname"
                            autoComplete="current-password"
                            value={values.lastname}
                            onChange={handleChange}
                            error={touched.lastname && Boolean(errors.lastname)}
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
                                    onClick={() => { }}
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