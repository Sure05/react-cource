import React, {Component} from "react";
import {TextField as TF} from '@material-ui/core';

export default class TextField extends Component {
	render() {
		const {label, value, keyName, callback, required, error} = this.props;
		return (
			<TF
				label={label}
				value={typeof value === 'number' ? value : ''}
				required={required}
				type="number"
				onChange={e => callback(Number.parseInt(e.target.value), keyName)}
				helperText={typeof error === 'string' ? error : ''}
				error={typeof error === 'string'}
			/>
		)
	}
}