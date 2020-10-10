import React, { Component, Fragment } from 'react';
import { Feed, Loader } from 'semantic-ui-react';
import Comments from "./Comments";

class Posts extends Component {

	state = {
		posts: [],
		isPostFetching: false,
		activePost: null
	};

	componentDidMount() {
		this.setState({ isPostFetching: true });
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(posts => {
				this.setState({ posts })
			})
	}

	selectPost = (post) => {
		const { onPostSelect } = this.props;
		onPostSelect(post);
		this.setState({ activePost: post.id })
	}

	render() {
		const { posts, isPostFetching, activePost } = this.state;

		return (
			<Fragment>
				<Loader size='small' active={isPostFetching} />
				<Feed>
					{posts.map((post, index) => (
						<Feed.Event key={post.id}>
							<Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
							<Feed.Content>
								<Feed.Summary onClick={() => this.selectPost(post)}>
									<a>{post.title}</a>
								</Feed.Summary>
								<Feed.Extra text>
									{post.body}
									{
										post.id === activePost ? <Comments postId={post.id} key={index} /> : ''
									}
								</Feed.Extra>
							</Feed.Content>
						</Feed.Event>
					))}
				</Feed>
			</Fragment>
		);
	}
}

export default Posts;
