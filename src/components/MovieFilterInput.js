import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieFilterAction } from "../redux/actions/movieFilterAction";

const MovieFilterSlider = () => {
  const dispatch = useDispatch();

  const {
    keyword,
    sortBy,
    withGenres,
    releaseDateGte,
    releaseDateLte,
    voteAverageGte,
    voteAverageLte,
  } = useSelector((state) => state.filter);

  useEffect(() => {

      dispatch(
        movieFilterAction.getMovieFilter(
          keyword,
          sortBy,
          withGenres,
          releaseDateGte,
          releaseDateLte,
          voteAverageGte,
          voteAverageLte
        ))
  }, []);

  return <div>MovieFilterSlider</div>;
};

export default MovieFilterSlider;
