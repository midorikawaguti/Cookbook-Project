import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlices';
import favoriteSliceReducer from "./slices/favoriteSlice";
import authSliceReducer from './slices/authSlice';

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        favorite: favoriteSliceReducer,
        auth: authSliceReducer,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;