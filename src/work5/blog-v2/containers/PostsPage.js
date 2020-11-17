import React from 'react'
import { Container, Item } from 'semantic-ui-react';
import useData from '../hooks/useData';
import PostItem from '../components/PostItem';
import DimmerLoader from "../components/DimmerLoader";

export default function PostsPage() {

    const [posts, isFetching] = useData('/posts', []);

    return (
        <Container className='page'>
          <DimmerLoader active={isFetching} />
            <Item.Group className='posts'>
                {posts.map(post => <PostItem key={post.id} post={post} />)}
            </Item.Group>
        </Container>
    )
}

