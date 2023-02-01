//hooks
import React, { createContext, useState, useEffect } from "react";

//fetch
import axios from "axios";

//context
export const ProductContext = createContext({});

function ProductProvider({ children }) {
	//states
	const [products, setProducts] = useState([]);
	const [loading, isLoading] = useState(false);

	useEffect(() => {
		const getAllProductsData = async () => {
			try {
				isLoading(true);
				const response = await axios.get(
					"https://fakestoreapi.com/products"
				);
				setProducts(response.data);
				console.log(response.data);
			} catch (error) {
				console.log(error);
			} finally {
				isLoading(false);
			}
		};

		getAllProductsData();
	}, []);

	return (
		<ProductContext.Provider
			value={{
				products,
				setProducts,
				isLoading,
				loading,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

export default ProductProvider;
