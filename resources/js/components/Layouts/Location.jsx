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
        arr = arr.slice(",")
        for(var i = arr.length-1;i++;i>=0){
            console.log(arr[i]);
        }
        let val = arr[1] + " , " + arr[2];
        console.log(arr);
        console.log("br")
    }

    const onChangeHandler = data => {

            axios
                .get(`${url}?query=${data}&apikey=${apikey}&${country}&${maxResult}`)
                .then(res => {
                    let suggs =  res.data.suggestions;
                    let locations = [];
                    suggs.map(sugg => {
                        // locations.push(sugg.label.split(","))
                        formatLocation(sugg.label)
                    });
                    setSuggestions(res.data.suggestions);
                })
                .catch(e => console.log(e));

    };

    return (
        <Autocomplete
            options={suggestions ? suggestions : [{ label: "Not Found" }]}
            getOptionLabel={option => option.label}
            getOptionSelected={option => option.label}
            onChange={(event, newValue) => {
                newValue ? updateValue(newValue.label) : updateValue(null);
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
