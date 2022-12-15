import {createSlice} from "@reduxjs/toolkit";

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

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        getMovieFilterRequest(state,action){
            state.loading = action.true;
        },
        storeMovieGenresSuccess(state,action){
            state.withGenres = action.payload.withGenres;
        },
        storeMovieSortSuccess(state,action){
            state.sortBy = action.payload.sortBy;
        },
        getFilteredMoviesRequest(state){
            
        },
        getFilteredMoviesSuccess(state,action){
            state.genreListData = action.payload.genreList.data;
            state.loading = action.false;
        },
        getMoreMoviesSuccess(state,action){
            state.moreMoviesData = action.payload.moreMoviesData;
            state.moreMoviesDataLoading = action.false;
            state.loading = action.false;
        },
        searchKeywordStoreSuccess(state,action){
            state.keyword = action.payload.keyword;
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
            state.includeVideo = action.payload.includeVideo;

        },
        resetMoviesSearchSuccess(state,action){
            state.keyword = {};
            state.loading = action.false;
        },
        getMovieFilterFail(state,action){
            state.loading = action.false;
        }
    }
});

export default filterSlice.reducer;
export const movieFilters = filterSlice.actions;