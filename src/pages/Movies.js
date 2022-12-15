import React, { useEffect } from "react";
import { movieFilterAction } from "../redux/actions/movieFilterAction";
import { useDispatch, useSelector } from "react-redux";
import MovieFilterButton from "../components/MovieFilterButton";
import FilteredMovieList from "../components/FilteredMovieList";
import MovieFilterInput from "../components/MovieFilterInput";
import MovieFilterSlider from "../components/MovieFilterSlider";

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
      <MovieFilterInput/>
      <MovieFilterSlider/>
      <MovieFilterSlider/>
    <MovieFilterButton />
    </div>
    <FilteredMovieList/>
  </div>;
};

export default Movies;
