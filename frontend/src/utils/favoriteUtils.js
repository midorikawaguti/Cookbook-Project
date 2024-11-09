export const updateFavorite  = (state) =>{
    localStorage.setItem('favorite', JSON.stringify(state));
    return state;
}