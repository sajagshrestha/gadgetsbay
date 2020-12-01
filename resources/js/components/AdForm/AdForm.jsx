import React, {useState} from "react";
import {Formik, Form,Field} from "formik";
import { TextField, MenuItem } from "@material-ui/core";

const AdFormFormik = () => {

    const initialValues = {
        title: "",
        description: "",
        price: "",
        expiresIn: "",
        negotiable: "",
        condition: "",
        usedFor: 0,
        frontCamera: "",
        backCamera: "",
        RAM: "",
        internalStorage: ""
    };

    return (
        <div className="">
            <Formik initialValues={initialValues} onSubmit={()=>{}} >
                {({values}) => (
                    <Form>
                        <Field name="title" as={TextField} label="Full Name"/>
                        <Field name= "description" as="textarea" as={TextField} label="Description" multiline rows={4}/>
                        <Field name="expiresIn" as={TextField} select>
                            <MenuItem value={14}>2 Weeks</MenuItem>
                            <MenuItem value={30}>1 Month</MenuItem>
                            <MenuItem value={60}>2 Months</MenuItem>
                            <MenuItem value={90}>3 Months</MenuItem>
                            <MenuItem value={120}>4 Months</MenuItem>
                        </Field>
                        <Field name="price" type="number"/>

                        <Field name="negotiable" value="yes" type="radio" />
                        <Field name="negotiable" value="fixed price" type="radio" />

                        <Field name="condition" value="Brand New" type="radio"/>
                        <Field name="condition" value="Like New" type="radio"/>
                        <Field name="condition" value="Excellent" type="radio"/>
                        <Field name="condition" value="Good/Fair" type="radio"/>
                        <Field name="condition" value="Not Working" type="radio"/>

                        <Field name="usedFor"/>
                        <Field name="frontCamera" as={TextField} select>
                            <MenuItem value="none">None</MenuItem>
                            <MenuItem value="1MP">1MP</MenuItem>
                            <MenuItem value="2MP">2MP</MenuItem>
                            <MenuItem value="3MP">3MP</MenuItem>
                            <MenuItem value="5MP">5MP</MenuItem>
                            <MenuItem value="10MP">10MP</MenuItem>
                            <MenuItem value="20MP">20MP</MenuItem>
                            <MenuItem value="More than 20MP">  More than 20MP </MenuItem>
                        </Field>

                        <Field name="backCamera" as={TextField} select>
                            <MenuItem value="none">None</MenuItem>
                            <MenuItem value="1MP">1MP</MenuItem>
                            <MenuItem value="2MP">2MP</MenuItem>
                            <MenuItem value="3MP">3MP</MenuItem>
                            <MenuItem value="5MP">5MP</MenuItem>
                            <MenuItem value="10MP">10MP</MenuItem>
                            <MenuItem value="20MP">20MP</MenuItem>
                            <MenuItem value="More than 20MP">  More than 20MP </MenuItem>
                        </Field>

                        <Field name="RAM" as={TextField} select>
                            <MenuItem value="512MB or less">512MB or less</MenuItem>
                            <MenuItem value="1GB">1GB</MenuItem>
                            <MenuItem value="2GB">2GB</MenuItem>
                            <MenuItem value="4GB">4GB</MenuItem>
                            <MenuItem value="6GB">6GB</MenuItem>
                            <MenuItem value="8GB">8GB</MenuItem>
                            <MenuItem value="More than 8GB">More than 8GB</MenuItem>
                        </Field>

                        <Field name="internalStorage" as={TextField} select>
                        <MenuItem value="1GB">1GB</MenuItem>
                        <MenuItem value="2GB">2GB</MenuItem>
                        <MenuItem value="4GB">4GB</MenuItem>
                        <MenuItem value="8GB">8GB</MenuItem>
                        <MenuItem value="16GB">16GB</MenuItem>
                        <MenuItem value="32GB">32GB</MenuItem>
                        <MenuItem value="128GB">128GB</MenuItem>
                        <MenuItem value="More than 128GB">
                            More than 128GB
                        </MenuItem>


                        </Field>


                        <pre>{JSON.stringify(values,null,4)}</pre>
                    </Form>
                )}


            </Formik>
        </div>
    );
}

export default AdFormFormik;

