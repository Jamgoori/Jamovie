import api from '../api';
import{movieDetail} from '../reducers/movieDetailReducer';
const API_KEY = process.env.REACT_APP_API_KEY;

function getMovieDetail(id, pageNum){
    return async (dispatch) =>{
        try {
            const getMovieDetail = api.get(
                `/movie/${id}?api_key=${API_KEY}&language=en-US&region=US`
            );
            const getMovieVideos = api.get(
                `/movie/${id}/videos?api_key=${API_KEY}&language=en-US&region=US`
              );
        
              const getMovieReviews = api.get(
                `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${pageNum}&region=US`
              );
        
              const getRecommendMovies = api.get(
                `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=${pageNum}&region=US`
              );
        
              const getSimilarMovies = api.get(
                `/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=${pageNum}&region=US`
              );
        
              const getCredits = api.get(
                `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
              );
              const [
                movieDetail,
                movieVideos,
                movieReviews,
                recommendMovies,
                similarMovies,
                movieCredits,
              ] = await Promise.all([
                getMovieDetail,
                getMovieVideos,
                getMovieReviews,
                getRecommendMovies,
                getSimilarMovies,
                getCredits,
              ]);
              
              dispatch(movieDetail.getMovieDetailSuccess({
                movieDetail: movieDetail.data,
                movieVideos: movieVideos.data,
                movieReviews: movieReviews.data,
                recommendMovies: recommendMovies.data,
                similarMovies: similarMovies.data,
                movieCredits: movieCredits.data,
                loading: false,
              })

              );
        } catch(error){
            dispatch(movieDetail.getMoviesFail({loading: false}))
        }
    };
}

export const movieDetailAction = {
    getMovieDetail
};
