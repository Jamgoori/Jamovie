import api from "../api";
import {movieFilter} from "../reducers/movieFilterReducer";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovieFilter(
  keyword,
  sortBy,
  withGenres,
  includeVideo,
  releaseDateGte,
  releaseDateLte,
  voteAverageGte,
  voteAverageLte,
  pageNum
) {
  return async (dispatch) => {
    try {
      const FilteredMovies = api.get(
        `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&region=US${
          keyword ? `&with_text_query=${keyword}` : ""
        }${includeVideo ? `&include_video=${includeVideo}` : ""}${
          releaseDateGte ? `&release_date.gte=${releaseDateGte}` : ""
        }${releaseDateLte ? `&release_date.lte=${releaseDateLte}` : ""}${
          voteAverageGte ? `&vote_average.gte=${voteAverageGte}` : ""
        }${voteAverageLte ? `&vote_average.lte=${voteAverageLte}` : ""}${
          withGenres ? `&with_genres=${withGenres}` : ""
        }${sortBy ? `&sort_by=${sortBy}` : "&sort_by=popularity.desc"}${
          pageNum ? `&page=${pageNum}` : "&page=1"
        }`
      );
      const getGenres = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US&region=US`
      );

      let [FilteredMoviesJson, GenresJson] = await Promise.all([
        FilteredMovies,
        getGenres,
      ]);
      dispatch(
        movieFilter.getMovieFilterSuccess({
          FilteredMoviesJson: FilteredMoviesJson,
          movieGenresJson: GenresJson,
        })
      );
    } catch (error) {
      dispatch(movieDetail.getMoviesFail({ loading: false }));
    }
  };
}

export const movieFilterAction = {
  getMovieFilter,
};
