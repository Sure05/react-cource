import {combineReducers} from "redux";
import productsReducer from "./productReduser";
import {cardReducer} from "./cardReducer";

export default combineReducers({
	cart: cardReducer,
	products: productsReducer
})