import { Form } from "react-bootstrap";
import { Formik } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as yup from "yup";
import * as apiService from "../../services/api.service";
import useAuth from "../../auth/useAuth";

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const schema = yup.object().shape({
    username: yup.string().required("El usuario es requerido!"),
    password: yup.string().required("El password es requerido!"),
});



const Login = () => {

    const classes = useStyles();
    const auth = useAuth();
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from;

    const handleOnSubmit = (values) => {

        auth.login({});
        console.log(auth.isLogged());
        history.push(previusObjectURL || '/');
        // apiService.getLogin(values.username, values.password)
        //     .then((res) => {
        //         console.log(res);
        //         if (res) {
        //             auth.Login(res)
        //         }
        //     })
        //     .catch();

    }


    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <Formik
                    validationSchema={schema}
                    onSubmit={handleOnSubmit}
                    initialValues={{
                        password: '',
                        username: '',
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
                                control={<Checkbox value="remember" color="primary" />}
                                label="Recuerdame"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Entrar
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Olvidaste tu contraseña?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Registrarse"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>

            </div>
        </Container>
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

export default Login;