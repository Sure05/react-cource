import React, {Component} from 'react';
import {Comment, Dimmer, Header, Loader} from "semantic-ui-react";

import './style.css'

class Comments extends Component {

	state = {
		comments: null,
		isFetching: false,
	};

	componentDidMount() {
		this.fetchPostComments();
	}

	fetchPostComments() {
		const { postId } = this.props;
		if (!postId) return;
		this.setState({ isFetching: true });
		fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
			.then(response => response.json())
			.then(comments => this.setState({ comments, isFetching: false }))
			.catch(err => this.setState({ isFetching: false }))
	}

	render() {
		const {comments, isFetching } = this.state;
		if (comments === null) return null;
		return (
			<Comment.Group className="CommentsComponent">
				<Header as='h3' dividing>
					Comments
				</Header>
				<Dimmer active={isFetching}>
					<Loader active={isFetching} />
				</Dimmer>

				{comments.map(comment => (
					<Comment>
						<Comment.Avatar src='https://react.semantic-ui.com//images/avatar/small/matt.jpg' />
						<Comment.Content>
							<Comment.Author as='a'>{comment.name}</Comment.Author>
							<Comment.Text>{comment.body}</Comment.Text>
						</Comment.Content>
					</Comment>
				))}
			</Comment.Group>
		);
	}
}

export default Comments;