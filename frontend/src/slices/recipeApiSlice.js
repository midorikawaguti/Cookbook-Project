import { RECIPES_URL } from "../constants.js";
import { apiSlice } from "./apiSlices.js";

export const recipesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getRecipes: builder.query({
            query:() => ({
                url: RECIPES_URL,
            }),
            keepUnusedDataFor: 5,
        }),
    }),
});

export const { useGetRecipesQuery} = recipesApiSlice;