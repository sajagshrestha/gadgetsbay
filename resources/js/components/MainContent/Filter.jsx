import React from "react";
import axios from "axios";
import "./Filter.css"

const Filter = () =>{
	
	const [filterValue,setFilterValue] = useState[{
		title:"",
		priceLessThan:"",
		priceMoreThan:"",
		location:"",
		condition:"",
		negotiable:""
	}];
 
	onChangeHandler = event =>
	{
		setFilterValue({
			...filterValue,
			[event.target.name]:event.target.value
		});

	};

	return(
		<div className="filter-container">
        <form >
            
            Search
            <input type="text" 
            className=""
            name="searchText"
			value = {filterValue.title}
			onChange = {onChangeHandler}
             />
			}
			}
        
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

			<button type="submit"> search </button>
			<button type="clear"> clear </button>


        </form>

    </div>

		);
};

export default Filter