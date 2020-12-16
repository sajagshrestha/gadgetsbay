import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";

const Location = ({ updateValue, meta, field, edit }) => {
    const [suggestions, setSuggestions] = useState([]);
    const [initialLocation, setInitialLocation] = useState("");

    useEffect(() => {
        if (field !== undefined) {
            let locations = [];
            locations.push(field.value);
            setSuggestions(locations);
            setInitialLocation(suggestions[0]);

        }
    }, [field]);

    const apikey = "aMR5m8XBOeByt_k5Y_VsmqGbCZ5PsQP4a8Lp7kpPY2M";
    const country = "country=NPL";
    const url = `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json`;
    const maxResult = "maxresults=5";

    const errorText = meta.error && meta.touched ? meta.error : "";

    const onChangeHandler = data => {
        axios
            .get(
                `${url}?query=${data}&apikey=${apikey}&${country}&${maxResult}`
            )
            .then(res => {
                let suggs = res.data.suggestions;
                let locations = [];
                let location = "";
                if (suggs !== undefined) {
                    suggs.map(sugg => {
                        location = sugg.label.slice(6);
                        location = location.split(",");
                        location = location.reverse().toString().trim();
                        locations.push(location);
                    });
                }

                setSuggestions(locations);
            })
            .catch(e => console.log(e));
    };

    return (
        <Autocomplete
            options={suggestions ? suggestions : ["Not Found"]}
            getOptionLabel={option => option}
            getOptionSelected={option => option}
            value={initialLocation}
            onChange={(event, newValue) => {
                newValue ? updateValue(newValue) : updateValue(null);
                setInitialLocation(newValue);
            }}
            onInputChange={(event, newInputValue) => {
                onChangeHandler(newInputValue);
            }}
            renderInput={params => (
                <TextField
                    {...params}
                    size="small"
                    label="Location"
                    name="location"
                    variant="outlined"
                    helperText={errorText}
                    error={!!errorText}
                />
            )}
        />
    );
};

export default Location;
