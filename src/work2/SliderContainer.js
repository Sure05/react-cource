import React, {Fragment, Component} from 'react';
import SplideComponent from "./SplideComponent";
import {Checkbox, Input, Select} from 'semantic-ui-react'

class SliderContainer extends Component {
	state = {
		type: 'slide',
		autoplay: true,
		interval: 2000,
		width: '50%',
		perPage: 1
	}
	setControl = value => {

	}
	render() {
		const countryOptions = [
			{value: 'slide', text: 'slide' },
			{value: 'loop', text: 'loop' },
		]
		return (
			<Fragment>
				<Input value={this.state.perPage} type="number" placeholder='Search...' onChange={(e, {value}) => this.setState({perPage: value})} />
				<Checkbox checked={this.state.autoplay} label={"Autoplay"} onClick={(e, {checked}) => this.setState({autoplay: checked})} />
				<Select value={this.state.type} placeholder='Select your country' onChange={(e, {value}) => this.setState({type: value})} options={countryOptions} />
				<SplideComponent options={this.state}/>
			</Fragment>
		);
	}
}

export default SliderContainer;