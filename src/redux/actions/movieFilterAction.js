import api from "../api";
import { movieFilters } from "../reducers/movieFilterReducer";
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

      const FilteredMoviesApi = api.get(
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
      const getGenresApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US&region=US`
      );

      let [FilteredMovies, Genres] = await Promise.all([FilteredMoviesApi,
        getGenresApi,]);

      dispatch(
        movieFilters.getMovieFilterSuccess({
            FilteredMovies: FilteredMovies.data,
            genreList: Genres.data.genres,
            loading: false,
        })
      );
    } 
    catch {
        dispatch(movieFilters.getMovieFilterFail({ loading: false }))
    }
  };
}

export const movieFilterAction = {
    getMovieFilter
}