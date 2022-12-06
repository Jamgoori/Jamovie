import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    movieDetail2: [],
    MovieCredits: {},
    RecommendMovies: {},
    SimilarMovies: {},
    MovieReviews: [],
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
            state.movieDetail2 = action.payload.movieDetail2;
            state.MovieCredits = action.payload.MovieCredits;
            state.RecommendMovies = action.payload.RecommendMovies;
            state.SimilarMovies = action.payload.SimilarMovies;
            state.MovieReviews = action.payload.MovieReviews;
            state.loading = action.false;
        },
        getMovieDetailFail(state,action){
            state.loading = action.false
        }
    }
});
export default detailSlice.reducer;
export const movieDetail = detailSlice.actions;