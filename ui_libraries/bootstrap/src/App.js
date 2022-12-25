import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Product from "Component/product/Product";

const App = () => {

	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		console.log("fetch method");
		const productsResponse = await fetch("https://dummyjson.com/products");
		const productsData = await productsResponse.json();
		console.log("products", products);
		setTimeout(() => {
			setProducts(productsData.products);
		}, 500);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className={``}>
			<header className="bg-info text-center p-3">
				<h2>Welcome to products list</h2>
			</header>
			<main className={`row m-0 px-5 pb-3`}>
				{products.length > 0 ?
					products.map(product => {
						return <Product key={product.id} product={product}></Product>;
					})
					: <h4 className="alert alert-info mt-4 text-center">Loading...</h4>}
			</main>
		</div>
	);
};

export default App;
