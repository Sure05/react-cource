import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { Container, Image, Header } from 'semantic-ui-react'
import useData from '../hooks/useData';
import DimmerLoader from "../components/DimmerLoader";
import SplideComponent from "../../../work2/SplideComponent";

export default function AlbumPage() {
    const { userId, albumId } = useParams();
    const [album, , err] = useData(`/albums/${albumId}`, {});
    const [photos, isFetching ] = useData(`/albums/${albumId}/photos`, []);
    console.log(photos)
    if (err && err.status === 404) {
        console.log(err);
        return <Redirect to={`/users/${userId}`} />
    }
    return (
        <Container className='page'>
            <DimmerLoader active={isFetching} />
            <Header>{album.title}</Header>
            {photos.length > 0 &&
            <SplideComponent options={{ perView: 3 }} bullets={false}>
                {photos.map(photo => <Image src={photo.url} rounded></Image>)}
            </SplideComponent>
            }
        </Container>
    )
}
