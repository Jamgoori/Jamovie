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


// function movieReducer(state=initialState,action){
// let{type,payload} = action
// switch(type){
//     case "GET_MOVIES_REQUEST":
//         return {...state, loading:true}
//     case "GET_MOVIES_SUCCESS":
//         return {...state,popularMovies: payload.popularMovies, 
//             topRatedMovies: payload.topRatedMovies, 
//             upcomingMovies: payload.upcomingMovies,
//             genreList:payload.genreList,
//             loading: false,
//         };
//     case "GET_MOVIES_FAIL":
//         return{...state,loading: false}
// default: return{...state}
// }
// }

// export default movieReducer;