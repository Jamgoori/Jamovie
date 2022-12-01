import api from "../api";
import { movieDetail } from "../reducers/movieDetailReducer";
const API_KEY = process.env.REACT_APP_API_KEY;

function getMovieDetail({id}) {
  return async (dispatch) => {
    try {
      const getMovieDetail = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US&region=US`
      );
      const [movieDetail] = await Promise.all([getMovieDetail]);

      dispatch(
        movieDetail.getMovieDetailSuccess({
          movieDetail: movieDetail.data,
        })
      );
      console.log("상세정보", movieDetail);
    } catch (error) {
      dispatch(movieDetail.getMoviesFail({ loading: false }));
    }
  };
}
export const movieDetailAction = {
  getMovieDetail,
};
