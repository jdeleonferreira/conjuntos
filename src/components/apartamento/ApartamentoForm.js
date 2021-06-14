import { Form, Button, Container } from "react-bootstrap";
import { Formik } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as yup from "yup";
import * as apiService from "../../services/api.service";
import useAuth from "../../auth/useAuth";
import { Redirect } from "react-router";

const schema = yup.object().shape({
    buildingId: yup.string().required("La torre es requerida"),
    apatmentnumber: yup.string().required("El número de apartamento es requerido!"),
    area: yup.string().required("El área de apartamento es requerida!"),
    istaken: yup.bool().required("E")
});



const ApartamentoForm = ({ torres }) => {

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
                    buildingId: 0,
                    apatmentnumber: '',
                    area: 0,
                    istaken: false
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
                        <Form.Group controlId="buildingId">
                            <Form.Label>Torre</Form.Label>
                            <Form.Control as="select"
                                name="buildingId"
                                value={values.buildingId}
                                onChange={handleChange}
                                isValid={touched.buildingId}
                                isInvalid={!!errors.buildingId}
                                placeholder="Seleccione una Torre" >
                                <option value="0">seleccione una opción</option>
                                {
                                    (torres || []).map((torre, index) => {
                                        return <option value={torre.id}>{torre.name}</option>
                                    })
                                }
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.buildingId}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="apatmentnumber">
                            <Form.Label>Número de apartamento</Form.Label>
                            <Form.Control
                                type="text"
                                name="apatmentnumber"
                                value={values.apatmentnumber}
                                onChange={handleChange}
                                isValid={touched.apatmentnumber}
                                isInvalid={!!errors.apatmentnumber}
                                placeholder="Número de Apartamento" />
                            <Form.Control.Feedback type="invalid">
                                {errors.apatmentnumber}
                            </Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group controlId="area">
                            <Form.Label>Área</Form.Label>
                            <Form.Control
                                type="text"
                                name="area"
                                value={values.area}
                                onChange={handleChange}
                                isValid={touched.area}
                                isInvalid={!!errors.area}
                                placeholder="area" />
                            <Form.Control.Feedback type="invalid">
                                {errors.area}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="istaken">
                            <Form.Switch
                                label="Está arrendado?"
                                type="text"
                                name="area"
                                value={values.istaken}
                                onChange={handleChange}
                                isValid={touched.istaken}
                                isInvalid={!!errors.istaken}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}


export default ApartamentoForm;