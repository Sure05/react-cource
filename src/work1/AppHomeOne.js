import React from 'react';
import {Grid} from "@material-ui/core";
import TableProducts from './components/TableProducts'
import ProductForm from './components/ProductForm'


class AppHomeOne extends React.Component{
	state = {
		categoriesList: [
			{
				id: 1,
				name: 'Phone'
			},
			{
				id: 2,
				name: 'Tabled'
			},
			{
				id: 3,
				name: 'Notebook'
			},
		],
		products: [],
		product: {},
		errors: {}
	}

	createData(id, name, categoryId, price, count) {
		return {id, name, categoryId, price, count};
	}

	componentDidMount() {
		this.setState({
			products: [
				this.createData(1,'IPhone', 1, 700, 24),
				this.createData(2,'Samsung', 2, 600, 37),
			]
		});
	}

	handleValidation(){
		let product = this.state.product;
		let errors = {};
		let formIsValid = true;

		if(!product["name"]){
			formIsValid = false;
			errors["name"] = "Cannot be empty";
		}
		if(!product["categoryId"]){
			formIsValid = false;
			errors["categoryId"] = "Cannot be empty";
		}
		if(!product["price"]){
			formIsValid = false;
			errors["price"] = "Cannot be empty";
		}
		if(!product["count"]){
			formIsValid = false;
			errors["count"] = "Cannot be empty";
		}

		this.setState({errors: errors});
		return formIsValid;
	}

	editProduct = id => {
		const {products} = this.state;
		products.forEach(itemList => {
			if(itemList.id ===  id)
				this.setState({product: itemList})
		})
	}

	removeProduct = id => {
		const {products} = this.state;
		let newArr = [...products].filter(product => {
			return product.id !== id
		})
		this.setState({products: newArr})
	}

	saveProduct = () => {
		const {product, products} = this.state;
		let newArr = [...products];
		if(this.handleValidation()){
			if(!product.hasOwnProperty('id')){
				let length = products.length;
				product.id = length > 0 ? products[length - 1].id + 1 : 1;
				newArr.push(product)
			} else {
				newArr.forEach((itemList, index) => {
					if(itemList.id ===  product.id)
						newArr[index] = product
				})
			}

			this.setState({
				products: newArr,
				product: {}
			})
		}
	}

	closeChange = () => {
		this.setState({product: {}});
	}

	changeField = (key, value) => {
		const {product} = this.state;
		let element = {...product}
		element[key] = value;
		this.setState({product: element});
	}

	render() {
		const {products, product, categoriesList, errors} = this.state;
		return (
			<div>
				<Grid container spacing={3}>
					<Grid item xs={10}>
						<TableProducts
							rows={products}
							categoriesList={categoriesList}
							editProduct={this.editProduct}
							removeProduct={this.removeProduct}
						/>
					</Grid>
					<Grid item xs={2}>
						<ProductForm
							changeField={this.changeField}
							product={product}
							errors={errors}
							categoriesList={categoriesList}
							saveProduct={this.saveProduct}
							closeChange={this.closeChange}
						/>
					</Grid>
				</Grid>
			</div>
		);
	}

}

export default AppHomeOne;
