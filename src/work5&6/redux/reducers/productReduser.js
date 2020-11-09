import {createReducer} from "@reduxjs/toolkit";
import {getProducts} from "../actions/product";

const initialState = {
	loading: false,
	data: [],
	error: null
};

const productsReducer = createReducer(initialState, {
	[getProducts.pending]: (state) => {
		state.loading = true;
		state.error = null
	},
	[getProducts.fulfilled]: (state, action) => {
		state.data = action.payload;
		state.loading = false;
	},
	[getProducts.rejected]: (state, action) => {
		state.error = action.payload;
		state.loading = false;
	}
});

export default productsReducer;