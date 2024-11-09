import { createSlice } from "@reduxjs/toolkit";
import { updateFavorite } from "../utils/favoriteUtils";

const initialState = localStorage.getItem("favorite")
    ?JSON.parse(localStorage.getItem("favorite"))
    :{favoriteItems:[]};

const favoriteSlice = createSlice({
    name:"favorite",
    initialState,
    reducers:{
        addToFav: (state, action) =>{
            const item = action.payload;
            const existItem = state.favoriteItems.find( (x) => x._id === item._id);

            if(!existItem){
                state.favoriteItems = [...state.favoriteItems, item];
            }

            return updateFavorite(state);
        },
        removeFromFav: (state, action) =>{
                state.favoriteItems = state.favoriteItems.filter((x) => x._id!== action.payload);
                return updateFavorite(state);
        },
    }
});

export const {addToFav, removeFromFav} = favoriteSlice.actions;
export default favoriteSlice.reducer;