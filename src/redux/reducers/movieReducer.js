import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    popularMovies:{},
    topRatedMovies:{},
    upcomingMovies:{},
    loading: true,
};


 const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getMovieRequest(state,action){
            state.loading = action.true
        },
        getMovieSuccess(state,action){
            state.popularMovies = action.payload.popularMovies;
            state.topRatedMovies = action.payload.topRatedMovies;
            state.upcomingMovies = action.payload.upcomingMovies;
            state.genreList = action.payload.genreList;
            state.loading = action.false
        },
        getMoviesFail(state,action){
            state.loading = action.false
        }
    }
});

export default movieSlice.reducer;
export const movieAction = movieSlice.actions;