import React, { useEffect, useState } from "react";
import { Formik, Form, Field, useField } from "formik";
import {
    Button,
    TextField,
    MenuItem,
    InputAdornment,
    InputLabel,
    Radio,
    FormControlLabel
} from "@material-ui/core";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router-dom";
import { FilterWrapper } from "./SearchResultsAndAllAds.styles";
import {StyledTextField} from "../../Layouts/AdForm.styles";
import Location from "../../Layouts/Location";

const MyLocationField = props => {
    const [field, meta, helpers] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    const { setValue } = helpers;
    return (
            <Location updateValue={setValue} meta={meta} />
    );
};

const RadioButton = ({ label, ...props }) => {
    const [field] = useField(props);
    return (
        <FormControlLabel
            {...field}
            control={<Radio color="primary" />}
            label={label}
            className="RadioButton"
        />
    );
};

const Filter = () => {
    const history = useHistory();
    const { search } = useLocation();
    const spreadValues = {
        title: "spread",
        priceLessThan: "",
        priceMoreThan: "",
        location: "",
        condition: "",
        negotiable: ""
    };

    const query = queryString.parse(search);
    const initialValues = { ...spreadValues, ...query };

    const onSubmitHandler = values => {
        const valueQuery = queryString.stringify(values);
        history.push(`searchResults?${valueQuery}`);
    };

    return (
        <FilterWrapper>
            <Formik
                initialValues={search === "" ? spreadValues : initialValues}
                enableReinitialize
                onSubmit={onSubmitHandler}
            >
                {({ isSubmitting }) => (
                    <Form className="filter-form">
                        <Field
                            name="title"
                            variant="outlined"
                            size="small"
                            as={TextField}
                            label="Search ads"
                        />
                        <MyLocationField name="location" />
                        <Field
                            name="condition"
                            size="small"
                            select
                            as={TextField}
                            variant="outlined"
                            label="Condition"
                        >
                            <MenuItem value="Brand New"> Brand New </MenuItem>
                            <MenuItem value="Like New"> Like New </MenuItem>
                            <MenuItem value="Excellent"> Excellent </MenuItem>
                            <MenuItem value="Good/Fair"> Good/Fair </MenuItem>
                            <MenuItem value="Any"> Any </MenuItem>
                        </Field>

                        <div className="form-group">
                            <div className="form-items">
                                <Field
                                    name="priceMoreThan"
                                    variant="outlined"
                                    size="small"
                                    as={TextField}
                                    label="From"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                Rs.
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <Field
                                    name="priceLessThan"
                                    variant="outlined"
                                    size="small"
                                    as={TextField}
                                    label="To"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                Rs.
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <InputLabel>Negotiable</InputLabel>

                            <RadioButton
                                name="negotiable"
                                type="radio"
                                value="yes"
                                label="Yes"
                            />
                            <RadioButton
                                name="negotiable"
                                type="radio"
                                value="no"
                                label="No"
                            />
                        </div>

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Apply Filter
                        </Button>
                    </Form>
                )}
            </Formik>
        </FilterWrapper>
    );
};

export default Filter;
