import React from 'react';
import {useSelector} from "react-redux";
import {Icon} from "semantic-ui-react";

import "./CartMEnuItem.css"

const CartMenuItem = props => {
	const cart = useSelector(state => state.cart)
	const count = cart.reduce((sum, element) => {
		return sum + (1 * element.count)
	}, 0)
	return (
		<div className='cart-icon'>
			Cart
			{count > 0 ? <div className="cart-icon-count">{count}</div> : ''}
		</div>
	);
};

export default CartMenuItem;