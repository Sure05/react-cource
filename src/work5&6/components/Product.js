import React from "react";
import {Button, Card, Image} from "semantic-ui-react";
import "./Product.css";
import {useDispatch} from "react-redux";
import {addProductToCart} from "../redux/actions/card";

function Product({product}) {
	const dispatch = useDispatch();
	return (
		<Card>
			<Image src={product.image} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{product.title}</Card.Header>
				<Card.Meta>{product.category}</Card.Meta>
				<Card.Description>
					<div>Price: {product.price}</div>
					<Button onClick={() => dispatch(addProductToCart(product.id))} primary>Add to cart</Button>
				</Card.Description>
			</Card.Content>
		</Card>
	)
}

export default Product;