import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    movieDetail: {},
    loading: true,
};

const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        getMovieDetailRequest(state,action){
            state.loading = action.true
        },
        getMovieDetailSuccess(state,action){
            state.movieDetail = action.payload.movieDetail;
            state.loading = action.false;
        },
        getMovieDetailFail(state,action){
            state.loading = action.false
        }
    }
});
export default detailSlice.reducer;
export const movieDetail = detailSlice.actions;