import React, {Component} from "react";
import TextField from "../../fields/TextField";
import Select from "../../fields/Select";
import NumberField from "../../fields/NumberField";
import Button from "@material-ui/core/Button";

import './ProductForm.css'


class ProductForm extends Component {

	updateField = (value, key) => this.props.changeField(key, value)

	render() {
		const {product, categoriesList, saveProduct, errors, closeChange} = this.props;

		return (
			<form className="ProductForm">
				<div>
					<Select
						value={product['categoryId']}
						list={categoriesList}
						keyName="categoryId"
						label="Category"
						required={true}
						callback={this.updateField}
						error={errors['categoryId']}
					/>
				</div>
				<div className="field">
					<TextField
						label="Name"
						value={product['name']}
						keyName="name"
						required={true}
						callback={this.updateField}
						error={errors['name']}
					/>
				</div>
				<div className="field">
					<NumberField
						label="Price"
						value={product['price']}
						keyName="price"
						required={true}
						callback={this.updateField}
						error={errors['price']}
					/>
				</div>
				<div className="field">
					<NumberField
						label="Count"
						value={product['count']}
						keyName="count"
						required={true}
						callback={this.updateField}
						error={errors['count']}
					/>
				</div>
				<Button variant="contained" onClick={saveProduct} color="primary">
					{product.hasOwnProperty('id') ? 'Save' : 'Add new'}
				</Button>
				{product.hasOwnProperty('id') ?
					<Button variant="contained" onClick={closeChange}>
						Cancel
					</Button> : ''
				}

			</form>
		);
	}
}

export default ProductForm;