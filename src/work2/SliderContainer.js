import React, {Fragment, Component} from 'react';
import SplideComponent from "./SplideComponent";
import {Checkbox, Input, Select} from 'semantic-ui-react'
import './style.css'

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
			<div className="container">
				<Input value={this.state.perPage} type="number" placeholder='Search...' onChange={(e, {value}) => this.setState({perPage: value})} />
				<br/><br/>
				<Checkbox checked={this.state.autoplay} label={"Autoplay"} onClick={(e, {checked}) => this.setState({autoplay: checked})} />
				<br/><br/>
				<Select value={this.state.type} placeholder='Select your country' onChange={(e, {value}) => this.setState({type: value})} options={countryOptions} />
				<br/><br/>
				<SplideComponent options={this.state}/>
			</div>
		);
	}
}

export default SliderContainer;