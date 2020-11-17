import React from 'react'

import createStore from "./redux/Store";
import {Provider} from "react-redux";
import Routes from "./Routes";

const store = createStore();

function BlogAndCart(){
    return (
    	<Provider store={store}>
			<Routes />
		</Provider>
    )
}

export default BlogAndCart

