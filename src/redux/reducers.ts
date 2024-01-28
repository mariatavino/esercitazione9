import { Album } from '../components/api';
import { createReducer } from '@reduxjs/toolkit';
import { setAlbum } from './actions';

interface AlbumState {
    album: Album | null;
  }
  
  const initialState: AlbumState = {
    album: null,
  };

  const albumReducer = createReducer(initialState, (builder) => {
    builder.addCase(setAlbum, (state, action) => {
      state.album = action.payload;
    });
});

export default albumReducer;
