import React, {useMemo} from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Grid, List} from "semantic-ui-react";
import CartItem from "../components/CartItem";
import CartSumm from "../components/CartSumm";

function CartPage() {
	const cart = useSelector(state => state.cart)
	const products = useSelector(state => state.products.data);

	const addedProducts = useMemo(() => {
		return cart.map(({ id, count }) => {
			const selected = products.find(product => product.id === id);
			if (!selected) return;
			const { image, price, title, category } = selected;
			return {
				id, count, image, price, title, category
			}
		});
	}, [products, cart]);

	if(cart.length === 0 || products.length === 0) {
		return (
			<span>Cart is empty, check <Link to="/products">products</Link> page</span>
		)
	}
	return (
		<Grid columns='equal'>
			<Grid.Column key={8}>
				<List>
					{addedProducts.map((product, index) => <CartItem key={index} product={product} />)}
				</List>
				<CartSumm products={addedProducts}/>
			</Grid.Column>
		</Grid>
	);
}

export default CartPage;