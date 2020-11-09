import React, {useMemo} from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {List} from "semantic-ui-react";
import CartItem from "../components/CartItem";

function CartPage() {
	const cart = useSelector(state => state.cart)
	const products = useSelector(state => state.products.data)

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

	if(addedProducts.length === 0){
		return (
			<span>Cart is empty, check <Link to="/products">products</Link> page</span>
		)
	}

	return (
		<div>
			<List>
				{addedProducts.map(product => <CartItem key={product.id} product={product} />)}
			</List>
		</div>
	);
}

export default CartPage;