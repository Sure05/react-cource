import React, {Component} from "react";
import {TextField as TF} from '@material-ui/core';

export default class TextField extends Component {
	render() {
		const {label, value, keyName, required, callback, error} = this.props;

		return (
			<TF
				label={label}
				value={typeof value === 'string' ? value : ''}
				required={required}
				error={typeof error === 'string'}
				helperText={typeof error === 'string' ? error : ''}
				onChange={e => callback(e.target.value, keyName)}
			/>
		)
	}
}