import api from "../api";
import { movieDetail } from "../reducers/movieDetailReducer";
const API_KEY = process.env.REACT_APP_API_KEY;

function getMovieDetail({id}) {
  return async (dispatch) => {
    try {
      const getMovieDetailApi = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US&region=US`
      );
      let [movieDetail2] = await Promise.all([getMovieDetailApi]);

      dispatch(
        movieDetail.getMovieDetailSuccess({
          movieDetail2: movieDetail2.data,
        })
      );
      console.log("상세정보", movieDetail2);
    } catch (error) {
      dispatch(movieDetail.getMoviesFail({ loading: false }));
    }
  };
}
export const movieDetailAction = {
  getMovieDetail,
};
