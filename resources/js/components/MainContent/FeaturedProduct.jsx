import React, { PropTypes , useEffect , useState} from "react";
import "./FeaturedProduct.css";
import HomeAdView from "../Layouts/HomeAdView";


const FeaturedProduct = ({ className }) => {

const [products, setProduct] = useState([]);
    useEffect(() => {
        axios.get("/api/products").then(response => {
            console.log(response.data.data)
            setProduct(response.data.data);
        });
    }, []);

	return (
		<div className="products-container">
			<div className="featured-product">
			
			{products.map(product => (
                <HomeAdView product={product} key={product.id} />
            ))}

			</div>
		</div>
	);
};

export default FeaturedProduct;
