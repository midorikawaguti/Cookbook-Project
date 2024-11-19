import {USERS_URL} from "../constants.js";
import {apiSlice} from './apiSlices.js';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        login: builder.mutation({
            query:(data) =>({
                url:`${USERS_URL}/login`,
                method: 'POST',
                body: data,
            }),
            keepUnusedDataFor: 5,
        })
    })
});

export const {userLoginMutation} = usersApiSlice;

