
import { configureStore } from '@reduxjs/toolkit';
import albumReducer from './reducers';

const store = configureStore({
  reducer: {
    album: albumReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
