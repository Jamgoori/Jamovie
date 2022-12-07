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
        getMovieFilterSuccess(state,action){
            state.withGenres = action.payload.withGenres;
            state.sortBy = action.payload.sortBy;
            state.genreListData = action.payload.genreList.data;
            state.moreMoviesData = action.payload.moreMoviesData;
            state.moreMoviesDataLoading = action.payload.moreMoviesDataLoading;
            state.keyword = action.payload.keyword;
            state.releaseDateGte = action.payload.date_gte;
            state.releaseDateLte = action.payload.date_lte;
            state.voteAverageGte = action.payload.vote_gte;
            state.voteAverageLte = action.payload.vote_lte;
            state.includeVideo = action.payload.includeVideo;
            state.keyword = {};
            loading = action.false;

        },
        getMovieFilterFail(state,action){
            state.loading = action.false;
        }
    }
});

export default filterSlice.reducer;
export const movieFilters = filterSlice.actions;