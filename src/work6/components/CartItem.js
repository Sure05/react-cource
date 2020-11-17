import React from 'react';
import './CartItem.css';
import {useDispatch} from "react-redux";
import {addProductToCart, removeProductFormCart} from "../redux/actions/card";
import {List, Button, Image, Icon} from 'semantic-ui-react'

function CartItem({product}) {
	const dispatch = useDispatch();
	const addMoreProducts = () => dispatch(addProductToCart(product.id));

	const removeProducts = () => dispatch(removeProductFormCart(product.id));
	return (
		<List.Item className="CartItem">
			<List.Content floated='right'>
				<Button icon onClick={addMoreProducts}><Icon name='plus'/></Button>
				<Button icon onClick={removeProducts}><Icon name='minus'/></Button>
			</List.Content>
			<Image className="image" src={product.image}/>
			<List.Content>
				{product.title} - <span className='muted'>{product.price}$ x {product.count} = {product.price * product.count}$</span>
			</List.Content>
		</List.Item>
	);
}

export default CartItem;