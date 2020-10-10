import React, {Fragment, Component} from 'react';
import SwiperComponent from "./SwiperComponent";
import { Checkbox } from 'semantic-ui-react'

class SliderContainer extends Component {
	state = {
		control: true,
		loop: true,
		direction: 'horizontal',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 1000,
		},
		autoPlayStatus: false
	}
	setControl = value => {

	}
	render() {
		return (
			<Fragment>
				<Checkbox checked={this.state.loop} label={"Loop"} onClick={(e, {checked}) => this.setState({loop: checked})} />
				<Checkbox checked={this.state.control} label={"Control"} onClick={(e, {checked}) => this.setState({control: checked})} />
				<Checkbox checked={this.state.autoPlayStatus} label={"Autoplay"} onClick={(e, {checked}) => this.setState({autoPlayStatus: checked})} />
				<SwiperComponent options={this.state}/>
			</Fragment>
		);
	}
}

export default SliderContainer;