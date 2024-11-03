import { createApi, fetchBaseQuery } from '@redux/toolkit/query/react';
import { BASE_URL } from '../constants.js';

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Recipe', 'Favorite', 'User'],
    endpoints: (builder) => ({}),
})