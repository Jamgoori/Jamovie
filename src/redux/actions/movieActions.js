import api from "../api";
import { movieAction } from "../reducers/movieReducer";

const API_KEY=process.env.REACT_APP_API_KEY

function getMovies(){
    return async (dispatch)=>{
        try{
            // dispatch({type:"GET_MOVIES_REQUEST"})
            dispatch(movieAction.getMovieRequest())
            const popularMovieApi = api.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const topRateApi = api.get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            const upComingApi = api.get(`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
           let [popularMovies, topRatedMovies, upcomingMovies,genreList ] = await Promise.all([popularMovieApi,topRateApi,upComingApi,genreApi])
        //    dispatch({
        //     type: "GET_MOVIES_SUCCESS",
        //     payload: {popularMovies:popularMovies.data, 
        //         topRatedMovies: topRatedMovies.data,
        //          upcomingMovies: upcomingMovies.data,
        //          genreList: genreList.data.genres,
        //          loading: false,
        //         }
            dispatch(movieAction.getMovieSuccess({popularMovies, topRatedMovies, upcomingMovies, genreList}))
           }
         catch(error){
            // dispatch({type: "GET_MOVIES_FAIL"})
            dispatch(movieAction.getMoviesFail())
        }
}}

export const movieActions = {
    getMovies
}