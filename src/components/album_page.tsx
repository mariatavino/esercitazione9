import React, { useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Album } from './api';
import Sidebar from './sidebar';
import Player from './navbar';
import { RootState } from '../redux/store';
import { setAlbum } from '../redux/actions';

const AlbumPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const album = useSelector((state: RootState) => state.album);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`);

        if (!response.ok) {
          throw new Error('Errore durante la richiesta dell\'album');
        }

        const fetchedAlbum: Album = await response.json();
        dispatch(setAlbum(fetchedAlbum));
      } catch (error:any) {
        console.error('Errore durante la richiesta:', error.message);
      }
    };

    fetchData();
  }, [dispatch,id]);

  const loading = !album; // Assuming album is null when loading

if (loading) {
  return <div>Loading...</div>;
}
  return (
    <Container>
      <Sidebar/>
      <Card className="mb-5">
    <Card.Img variant="top" src={album?.cover_medium} alt="Album Cover" className="img-fluid" />
    <Card.Body>
      <Card.Title>
        <a href={`/album_page/${album?.id}`}>
          Album: "${album?.title?.length < 16
            ? `${album?.title}`
            : `${album?.title.substring(0, 16)}...`}"</a>
      </Card.Title>
      <Card.Text>
        <a href={`/artist_page/${album?.contributors?.id}`}>Artist: {album?.contributors?.name}</a>
      </Card.Text>
    </Card.Body>
  </Card>
    <Player/>
    </Container>
    );};

export default AlbumPage;
