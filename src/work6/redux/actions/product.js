import {createAsyncThunk} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk('products/getProducts', async () => {
	return await fetch('https://fakestoreapi.com/products').then(res => res.json());
});

