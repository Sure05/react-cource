import React from 'react'
import { Comment, Icon } from 'semantic-ui-react';
import useData from '../hooks/useData';
import DimmerLoader from "./DimmerLoader";

export default function Comments({ postId }) {
    const [comments, isFetching] = useData(`/posts/${postId}/comments`, [])
    if (isFetching) return <Icon name='asterisk' loading />
    return (
        <Comment.Group>
            <DimmerLoader active={isFetching} />
                { comments.map(comment => (
                 <Comment key={comment.id}>
                    <Comment.Avatar src='https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png' />
                    <Comment.Content>
                        <Comment.Author>
                            {comment.email}
                         </Comment.Author>
                        <Comment.Text>{comment.body}</Comment.Text>
                    </Comment.Content>
                </Comment>
                )) }
        </Comment.Group>
    )
}
