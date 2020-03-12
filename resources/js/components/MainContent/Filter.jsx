import React,{useState,useContext} from "react";
import axios from "axios";
import "./Filter.css"
import { SearchContext } from "../App.jsx";
import { withRouter } from "react-router-dom";

const Filter = ({ history }) =>{

	 const { setSearchedPosts } = useContext(SearchContext);
	
	const [filterValue,setFilterValue] = useState({
		title:"",
		priceLessThan:null,
		priceMoreThan:null,
		location:null,
		condition:null,
		negotiable:null
	});
 
	const onChangeHandler = event =>
	{
		setFilterValue({
			...filterValue,
			[event.target.name]:event.target.value
		});

	};
	const resetField = () =>
	{
		setFilterValue({
			title:"",
			priceLessThan:"",
			priceMoreThan:"",
			location:"",
			condition:"",
			negotiable:"",
		});
		
	};

	const onSubmitHandler = () => {
		event.preventDefault();
		axios
			.post("api/filter",{
				title: filterValue.title,
				location: filterValue.location,
				condition: filterValue.condition,
				PriceMoreThan:filterValue.priceMoreThan,
				PriceLessThan: filterValue.priceLessThan,

			 })
			.then(response => {
				setSearchedPosts(response.data.data);
				history.push("/searchResults");
			})
			.catch(err => console.log(err));

	};

	return(
		<div className="filter-container">
        <form onSubmit={onSubmitHandler}>
            
            Search
            <input type="text" 
            className=""
            name="title"
			value = {filterValue.title}
			onChange = {onChangeHandler}
             />
        
            Location
            <input type="text" className="" name="location" 
            value = {filterValue.location}
			onChange = {onChangeHandler}
			/>
     
            Condition
            <select name="condition" id="condition" value = {filterValue.condition} onChange = {onChangeHandler}>
                <option value=""></option>
                <option value="Brand New(not used)">Brand New</option>
                <option value="used">used</option>
            </select>
            
			Price
            <div className="price">
            	Rs
            	<input type="text" className="" name="priceMoreThan" value = {filterValue.priceMoreThan} onChange = {onChangeHandler}/>
            	to
            	<input type="text" className="" name="priceLessThan" value = {filterValue.priceLessThan} onChange = {onChangeHandler} />
            </div>
			Price Negotible
			<input type="radio" name="negotiable" value="any" onChange = {onChangeHandler}/>Any
			<input type="radio" name="negotiable" value="yes" onChange = {onChangeHandler}/>Yes
			<input type="radio" name="negotiable" value="fixed price" onChange = {onChangeHandler}/>Fixed price

			<button type="submit" > search </button>
			<button type="reset" onClick= {resetField}> clear </button>


	        </form>

	    </div>

		);
};

export default Filter