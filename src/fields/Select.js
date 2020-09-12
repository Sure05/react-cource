import React, {Component} from "react";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText"
import {makeStyles} from "@material-ui/core/styles";

export default class Select extends Component{

	render() {
		const {list, keyName, value, callback, label, required, error} = this.props;
		const classes = makeStyles((theme) => ({
			formControl: {
				margin: theme.spacing(1),
				minWidth: 120,
				width: '100%'
			},
		}));

		return (
			<FormControl
				required={required}
				error={typeof error === 'string'}
				className={classes.formControl}
			>
				<InputLabel shrink htmlFor="age-native-label-placeholder">
					{label}
				</InputLabel>
				<NativeSelect
					value={typeof value === 'number' ? value : ''}
					onChange={e => callback(Number.parseInt(e.target.value), keyName)}
					inputProps={{
						name: 'age',
						id: 'age-native-label-placeholder',
					}}
				>
					<option value="">None</option>
					{
						list.map((element, index) => {
							return (
								<option key={index} value={element.id}>
									{element.name}
								</option>
							)
						})
					}
				</NativeSelect>
				{(typeof error === 'string') ? <FormHelperText>{error}</FormHelperText> : ''}
			</FormControl>
		);
	}
}