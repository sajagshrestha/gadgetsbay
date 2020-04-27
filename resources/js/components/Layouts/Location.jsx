import React,{useState} from "react";
// import "./Location.css";
import PlacesAutoComplete from "react-places-autocomplete";

const Location = () => {
	const [location,SetLocation] = useState('');
	
	const onSelectHandler = (value) =>{};

	return (
		<div>
			<PlacesAutoComplete value={location} onChange={SetLocation} onSelect={onSelectHandler}>
			{({ getInputProps, suggestions, getSuggestionItemProps, loading }) =>
				(
					<div>
						<input {...getInputProps({className : 'location-input form-control'})}/>
						<div>
							{loading ? <div>...loading</div> : null}
							{suggestions.map((suggestion) => {
							return <div>{suggestion.description}</div>
							})}
						</div>
					</div>

				)}	
			</PlacesAutoComplete>
		</div>
		);

};


export default Location;