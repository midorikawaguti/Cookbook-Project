import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlices';
import favoriteSliceReducer from "./slices/favoriteSlice";

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        favorite: favoriteSliceReducer,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;