import { createAction } from '@reduxjs/toolkit';
import { Album } from '../components/api';

export const setAlbum = createAction<Album>('SET_ALBUM');
