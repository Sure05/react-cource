import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper/bundle';

import 'swiper/swiper-bundle.css';
import './style.css';

class SwiperComponent extends Component {
	constructor(props) {
		super(props);
		this.slider = React.createRef(); // this.slider.current === null
		this.swiper = null;
	}

	componentDidMount() {
		this.swiper = new Swiper(this.slider.current, this.props.options)
		if(this.props.options.hasOwnProperty('autoPlayStatus')){
			if(this.props.options.hasOwnProperty('autoPlayStatus')){
				this.props.options.autoPlayStatus ? this.swiper.autoplay.start() : this.swiper.autoplay.stop()
			}
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.props.options !== prevProps.options) {
			if(this.props.options.hasOwnProperty('autoPlayStatus')){
				this.props.options.autoPlayStatus ? this.swiper.autoplay.start() : this.swiper.autoplay.stop()
			}
		}
	}

	componentWillUnmount() {
		this.swiper.destroy()
	}

	render() {
		const {control} = this.props.options;
		return (
			<div ref={this.slider} className="swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<img className="full-with-img"
							 src="https://i.morioh.com/200613/cbd162d1.jpg"
							 alt=""
						/>
					</div>
					<div className="swiper-slide">
						<img className="full-with-img"
							 src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/top-20-angularjs-developer-tools.jpg"
							 alt=""
						/>
					</div>
					<div className="swiper-slide">
						<img className="full-with-img"
							 src="https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1"
							 alt=""
						/>
					</div>
				</div>
				{
					control ?
						<Fragment>
							<div className="swiper-pagination"></div>
							<div className="swiper-button-prev" onClick={() => this.swiper.slidePrev()}></div>
							<div className="swiper-button-next" onClick={() => this.swiper.slideNext()}></div>
							<div className="swiper-scrollbar"></div>
						</Fragment>
					: ''
				}

			</div>
		);
	}
}

SwiperComponent.propTypes = {};

export default SwiperComponent;
