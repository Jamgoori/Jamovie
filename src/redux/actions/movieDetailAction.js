import api from "../api";
import { movieDetail } from "../reducers/movieDetailReducer";
const API_KEY = process.env.REACT_APP_API_KEY;

function getMovieDetail({ id },pageNum) {
  return async (dispatch) => {
    try {
      const getMovieDetailApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US&region=US`
      );
      const getCreditApi = api.get(
        `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );

      const getRecommendMoviesApi = api.get(
        `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=${pageNum}&region=US`
      );

      const getSimilarMoviesApi = api.get(
        `movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=${pageNum}&region=US`
      );
      let [
        movieDetail2,
        MovieCredits,
        RecommendMovies,
        SimilarMovies,
      ] = await Promise.all([getMovieDetailApi, getCreditApi, getRecommendMoviesApi, getSimilarMoviesApi]);

      dispatch(
        movieDetail.getMovieDetailSuccess({
          movieDetail2: movieDetail2.data,
          MovieCredits: MovieCredits.data,
          RecommendMovies: RecommendMovies.data,
          SimilarMovies: SimilarMovies.data
        })
      );
      console.log("비슷", SimilarMovies)
    } catch (error) {
      dispatch(movieDetail.getMoviesFail({ loading: false }));
    }
  };
}
export const movieDetailAction = {
  getMovieDetail,
};
