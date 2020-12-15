import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";

const Location = ({ updateValue, meta }) => {
    const [suggestions, setSuggestions] = React.useState([]);

    let apikey = "aMR5m8XBOeByt_k5Y_VsmqGbCZ5PsQP4a8Lp7kpPY2M";
    let country = "country=NPL";
    let url = `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json`;
    let maxResult = "maxresults=5";

    const errorText = meta.error && meta.touched ? meta.error : "";

    const formatLocation = (str) =>{
        let arr = str.slice(6);
        arr = arr.split(",")
        arr = arr.reverse().toString();
    }

    const onChangeHandler = data => {

            axios
                .get(`${url}?query=${data}&apikey=${apikey}&${country}&${maxResult}`)
                .then(res => {
                    let suggs =  res.data.suggestions;
                    let locations = [];
                    let location = "";
                    if(suggs !== undefined)
                    {
                        suggs.map(sugg => {
                            location = sugg.label.slice(6);
                            location = location.split(",");
                            location = location.reverse().toString();
                            locations.push(location);
                        });
                    }

                    setSuggestions(locations);
                })
                .catch(e => console.log(e));

    };

    return (
        <Autocomplete
            options={suggestions ? suggestions : [ "Not Found" ]}
            // getOptionLabel={option => option}
            // getOptionSelected={option => option}
            onChange={(event, newValue) => {
                newValue ? updateValue(newValue) : updateValue(null);
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
