import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import {Container, Menu} from "semantic-ui-react";
import CSSTransition from "react-transition-group/CSSTransition";
import NotFoundPage from "./containers/NotFoundPage";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getProducts} from "./redux/actions/product";
import ProductsPage from "./containers/ProductsPage";
import CartMenuItem from "./components/CartMenuItem";
import CartPage from "./containers/CartPage";

function Routes() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, []);
	return (
		<Container>
			<Router>
				<Menu pointing secondary>
					<NavLink exact to="/" activeClassName='active' className="item">
						Home
					</NavLink>
					<NavLink to="/albums" activeClassName='active' className="item">
						Albums
					</NavLink>
					<NavLink to="/users" activeClassName='active' className="item">
						Users
					</NavLink>
					<NavLink to="/products" activeClassName='active' className="item">
						Products
					</NavLink>
					<NavLink to="/cart" activeClassName='active' className="item">
						<CartMenuItem />
					</NavLink>
				</Menu>
				<CSSTransition
					classNames="fade"
					timeout={250}
				>
					<Switch>
						<Route path="/" exact>
							<Link to="/users">Users List</Link>
						</Route>
						<Route path="/albums" exact />
						<Route path="/users" exact />
						<Route path="/products" exact component={ProductsPage}/>
						<Route path="/cart" exact component={CartPage}/>
						<Route path='*' component={NotFoundPage} />
					</Switch>
				</CSSTransition>
			</Router>
		</Container>
	)
}
export default Routes;