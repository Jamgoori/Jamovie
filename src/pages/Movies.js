import React, { useEffect } from "react";
import { movieFilterAction } from "../redux/actions/movieFilterAction";
import { useDispatch, useSelector } from "react-redux";
import MovieFilterButton from "../components/MovieFilterButton";

const Movies = () => {
  const dispatch = useDispatch();
  const {
    moreMoviesData,
    moreMoviesDataLoading,
    genreList,
    keyword,
    sortBy,
    withGenres,
    includeVideo,
    releaseDateGte,
    releaseDateLte,
    voteAverageGte,
    voteAverageLte
  } = useSelector((state) => state.filter);

  useEffect( ()=>{
    dispatch(movieFilterAction.getMovieFilter())
    }, []);

  return <div>
    <div>
    <MovieFilterButton />
    </div>
  </div>;
};

export default Movies;
