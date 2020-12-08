import React from "react";
import { Formik, Form, Filed, Field } from "formik";
import { TextField } from "@material-ui/core";
const initialValues = {
    title: "",
    priceLessThan: "",
    priceMoreThan: "",
    location: "",
    condition: "",
    negotiable: ""
};

const Filter = () => {
    return (
        <div>
            <Formik initialValues={initialValues}>
                <Form>
                    <Field
                        name="title"
                        type="input "
                        as={TextField}
                        variant="outlined"
                        size="small"
                    />
                </Form>
            </Formik>
        </div>
    );
};

export default Filter;
