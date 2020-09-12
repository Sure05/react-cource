import React, {Component} from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class TableProductRow extends Component{

	getCategoryNameById = id => {
		const {categoriesList} = this.props;
		return categoriesList.map(elem => {
			return elem.id === id ? elem.name : ''
		})
	}

	render() {
		const {row, removeProduct, editProduct} = this.props;
		return (
			<TableRow key={row.name}>
				<TableCell component="th" scope="row">
					{row.name}
				</TableCell>
				<TableCell align="right">{this.getCategoryNameById(row.categoryId)}</TableCell>
				<TableCell align="right">{row.price}</TableCell>
				<TableCell align="right">{row.count}</TableCell>
				<TableCell align="right">
					<IconButton onClick={() => editProduct(row.id)} aria-label="delete">
						<EditIcon />
					</IconButton>
					<IconButton onClick={() => removeProduct(row.id)} aria-label="delete">
						<DeleteIcon />
					</IconButton>
				</TableCell>
			</TableRow>
		);
	}

}