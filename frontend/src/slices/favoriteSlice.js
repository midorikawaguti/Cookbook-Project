import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorite")):{favoriteItems:[]};

const favoriteSlice = createSlice({
    name:"favorite",
    initialState,
    reducers:{
        addToFav: (state, action) =>{
            const item = action.payload;
            const existItem = state.favoriteItems.find( (x) => x._id === item._id);

            if(existItem){
                state.favoriteItems = state.favoriteItems.map((x) => x._id === existItem._id? item:x);
            } else {
                state.favoriteItems = [...state.favoriteItems, item];
            }

            localStorage.setItem('favorite', JSON.stringify(state));
        }
    }
});

export const {addToFav} = favoriteSlice.actions;
export default favoriteSlice.reducer;