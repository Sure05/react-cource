import React, {Component} from 'react';

import TableProductRow from "./TableProductRow";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default class TableProducts extends Component {
	render() {
		const classes = makeStyles({
			table: {
				minWidth: 650,
			},
		});
		const {rows, categoriesList, removeProduct, editProduct} = this.props

		return (
			<TableContainer component={Paper}>
				<Table className={classes.table} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">Category</TableCell>
							<TableCell align="right">Price</TableCell>
							<TableCell align="right">Count</TableCell>
							<TableCell align="right">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, index) => (
							<TableProductRow
								key={index}
								row={row}
								categoriesList={categoriesList}
								editProduct={editProduct}
								removeProduct={removeProduct}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		);
	}
}