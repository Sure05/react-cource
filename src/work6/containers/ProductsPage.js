import React from 'react';
import { useSelector } from "react-redux";
import {Container, Card} from "semantic-ui-react";
import Product from "../components/Product";
import LoaderComponent from "../components/Loader";

function ProductsPage() {
	const products = useSelector(state => state.products.data);
	const isLoading = useSelector(state => state.products.loading);
	return (
		<Container>
			<Card.Group>
				{ isLoading && <LoaderComponent active /> }
				{products.map(product => <Product key={product.id} product={product} />)}
			</Card.Group>
		</Container>
	);
}
export default ProductsPage;