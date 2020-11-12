import {createReducer} from "@reduxjs/toolkit";
import {addProductToCart, removeProductFormCart} from "../actions/card";

let initialState = [];

if(localStorage.hasOwnProperty('product')){
	initialState = JSON.parse(localStorage.getItem('product'))
}

export const cardReducer = createReducer(initialState, {
	[addProductToCart.type]: (state, action) => {
		const productIndex = state.findIndex(product => product.id === action.payload);
		if (productIndex === -1) {
			state.push({ id: action.payload, count: 1 });
		} else {
			state[productIndex].count++;
		}
	},
	[removeProductFormCart.type]: (state, action) => {
		const productIndex = state.findIndex(product => product.id === action.payload);
		if (state[productIndex].count === 1) {
			state.splice(productIndex, 1)
		} else {
			state[productIndex].count--;
		}
	}
})