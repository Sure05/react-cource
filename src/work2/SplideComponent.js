import React, {Component, Fragment} from 'react';
import Splide from '@splidejs/splide';

import '@splidejs/splide/dist/css/splide.min.css';
import './style.css';

class SplideComponent extends Component {
	constructor(props) {
		super(props);
		this.slider = React.createRef();
		this.splide = null;
	}

	componentDidMount() {
		this.splide = new Splide(this.slider.current, this.props.options).mount()
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.props.options !== prevProps.options) {
			this.splide.destroy();
			this.splide = new Splide(this.slider.current, this.props.options).mount()
		}
	}

	componentWillUnmount() {
		this.splide.destroy()
	}

	render() {
		const { children } = this.props;

		return (
			<div ref={this.slider} className="splide">
				<div className="splide__track">
					<ul className="splide__list">
						{
							children.map(img => <li className="splide__slide">{img}</li>)
						}
					</ul>
				</div>
			</div>
		);
	}
}

export default SplideComponent;
