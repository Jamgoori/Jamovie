import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    moreMoviesData: {},
    moreMoviesDataLoading: true,
    genreListData: {},
    keyword: "",
    loading: true,
    sortBy: "",
    withGenres: "",
    includeVideo: "",
    releaseDateGte: "",
    releaseDateLte: "",
    voteAverageGte: "",
    voteAverageLte: "",
};

const FilterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        getMovieFilterRequest(state,action){
            state.loading = action.true;
        },
        storeMovieGenresSuccess(state,action){
            state.withGenres = action.payload;
        },
        storeMovieSortSuccess(state,action){
            state.sortBy = action.payload;
        },
        getMovieFilterSuccess(state,action){
            state.genreListData = action.payload.movieGenresJson.data;
            state.loading = action.false;
        },
        getMoreMoviesSuccess(state,action){
            state.moreMoviesData = action.payload;
            state.moreMoviesDataLoading = action.false;
            state.loading = action.false;
        },
        getMovieFilterFail(state,action){
            state.loading = action.false;
        },
        searchKeywordStoreSuccess(state,action){
            state.keyword = action.payload;
        },
        releaseDateFilterStoreSuccess(state,action){
            state.releaseDateGte = action.payload.date_gte;
            state.releaseDateLte = action.payload.date_lte;
        },
        scoreFilterStoreSuccess(state,action){
            state.voteAverageGte = action.payload.vote_gte;
            state.voteAverageLte = action.payload.vote_lte;
        },
        includeMovieVideoToggleSuccess(state,action){
            state.includeVideo = action.payload;
        },
        resetMovieSearchSuccess(state,action){
            state.keyword = {};
            state.loading = action.true;
        }


    }
})


export default FilterSlice.reducer;
export const movieFilter = FilterSlice.actions;