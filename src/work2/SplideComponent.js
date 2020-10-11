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
		return (
			<div ref={this.slider} className="splide">
				<div className="splide__track">
					<ul className="splide__list">
						<li className="splide__slide">
							<img className="full-with-img"
								 src="https://i.morioh.com/200613/cbd162d1.jpg"
								 alt=""
							/>
						</li>
						<li className="splide__slide">
							<img className="full-with-img"
								 src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/top-20-angularjs-developer-tools.jpg"
								 alt=""
							/>
						</li>
						<li className="splide__slide">
							<img className="full-with-img"
								 src="https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1"
								 alt=""
							/>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default SplideComponent;
