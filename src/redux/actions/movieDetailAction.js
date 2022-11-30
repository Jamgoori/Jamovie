import api from '../api';
import{movieDetail} from '../reducers/movieDetailReducer';
const API_KEY = process.env.REACT_APP_API_KEY;

function getMovieDetail(movie_id, pageNum){
    return async (dispatch) =>{
        try {
            const getMovieDetailJson = api.get(
                `/movie/${movie_id}?api_key=${API_KEY}&language=en-US&region=US`
            );
            const getMovieVideos = api.get(
                `/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US&region=US`
              );
        
              const getMovieReviews = api.get(
                `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=${pageNum}&region=US`
              );
        
              const getRecommendMovies = api.get(
                `/movie/${movie_id}/recommendations?api_key=${API_KEY}&language=en-US&page=${pageNum}&region=US`
              );
        
              const getSimilarMovies = api.get(
                `/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=${pageNum}&region=US`
              );
        
              const getCredits = api.get(
                `/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
              );
              const [
                MovieDetailJson,
                MovieVideos,
                MovieReviews,
                RecommendMovies,
                SimilarMovies,
                MovieCredits,
              ] = await Promise.all([
                getMovieDetailJson,
                getMovieVideos,
                getMovieReviews,
                getRecommendMovies,
                getSimilarMovies,
                getCredits,
              ]);
              
              dispatch(movieDetail.getMovieDetailSuccess({
                MovieDetailJson: MovieDetailJson,
                MovieVideos: MovieVideos,
                MovieReviews: MovieReviews,
                RecommendMovies: RecommendMovies,
                SimilarMovies: SimilarMovies,
                MovieCredits: MovieCredits,
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
