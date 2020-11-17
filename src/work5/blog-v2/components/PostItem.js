import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import { useState } from 'react';
import Comments from './Comments';
import useData from '../hooks/useData';
import DimmerLoader from "./DimmerLoader";

export default function PostItem({ post }) {
    const [hasCommentsDisplayed, setCommentsDisplaying] = useState(false)
    const [ user, isFetchingUser ] = useData(`/users/${post.userId}`, null, hasCommentsDisplayed)

    return (
        <Item>
            <Item.Content>
                <Item.Header as='a'>{post.title}</Item.Header>
                <Item.Description>
                    {post.body}
                </Item.Description>
                <Item.Extra>
                    {!user && <DimmerLoader active={isFetchingUser} /> }
                    {user && <Link to={`/users/${post.userId}`}>Go to {user ? user.name : 'Author'}</Link> }
                </Item.Extra>
                <Item.Extra onClick={() => setCommentsDisplaying(!hasCommentsDisplayed)}>
                    Comments
                </Item.Extra>
                {hasCommentsDisplayed &&
                <Item.Extra>
                    <Comments postId={post.id} />
                </Item.Extra>
                }
            </Item.Content>
        </Item>
    )
}
