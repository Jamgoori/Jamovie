import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    movieDetailData: {},
    movieVideos: {},
    movieVideosForBanner: {},
    movieReviews: {},
    recommendMovies: {},
    similarMovies: {},
    movieCredits: {},
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
            state.movieDetailData = action.payload.movieDetailData;
            state.movieVideos = action.payload.movieVideos;
            state.movieVideosForBanner = action.payload.movieVideosForBanner;
            state.movieReviews = action.payload.movieReviews;
            state.recommendMovies = action.payload.recommendMovies;
            state.similarMovies = action.payload.similarMovies;
            state.movieCredits = action.payload.movieCredits;
            state.loading = action.false;
        },
        getMovieDetailFail(state,action){
            state.loading = action.false
        }
    }
});

export default detailSlice.reducer;
export const movieDetail = movieDetail.actions;