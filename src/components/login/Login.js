import { Form, Button, Container } from "react-bootstrap";
import { Formik } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as yup from "yup";
import * as apiService from "../../services/api.service";
import useAuth from "../../auth/useAuth";
import { Redirect } from "react-router";

const schema = yup.object().shape({
    username: yup.string().required("El usuario es requerido!"),
    password: yup.string().required("El password es requerido!"),
});



const Login = () => {

    const auth = useAuth();
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from;
    const handleOnSubmit = (values) => {
        try {
            auth.login({});
            console.log(auth.isLogged());
            history.push(previusObjectURL || "/home");
            // apiService.getLogin(values.username, values.password)
            //     .then((res) => {
            //         console.log(res);
            //         if (res) {
            //             auth.Login(res)
            //         }
            //     })
            //     .catch();
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <Container >
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
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                isValid={touched.username}
                                isInvalid={!!errors.username}
                                placeholder="Enter username" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                isValid={touched.password}
                                isInvalid={!!errors.password}
                                placeholder="Password" />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Mantener me out" />
                            <a href="#" >Registro</a>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}


export default Login;