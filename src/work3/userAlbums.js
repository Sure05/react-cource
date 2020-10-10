import React, {Component, Fragment} from 'react';
import {Dimmer, List, Loader} from "semantic-ui-react";

class UserAlbums extends Component {

	state = {
		albums: null,
		isFetching: false,
	};

	componentDidMount() {
		this.fetchUserAlbums();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const { userId } = this.props;
		if (prevProps.userId !== userId && userId !== null) {
			this.fetchUserAlbums()
		}
	}

	fetchUserAlbums() {
		const { userId } = this.props;
		if (!userId) return;
		this.setState({ isFetching: true });
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
			.then(response => response.json())
			.then(albums => this.setState({ albums, isFetching: false }))
			.catch(err => this.setState({ isFetching: false }))
	}

	render() {
		const {albums, isFetching } = this.state;
		if (albums === null) return null;
		return (
			<Fragment>
				<Dimmer active={isFetching}>
					<Loader active={isFetching} />
				</Dimmer>
				<div>
					Albums
					<List ordered>
						{albums.map(album => (
							<List.Item key={album.id}>{album.title}</List.Item>
						))}
					</List>
				</div>
			</Fragment>
		);
	}
}

export default UserAlbums;