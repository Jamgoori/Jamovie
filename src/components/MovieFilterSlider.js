import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { movieFilterAction } from '../redux/actions/movieFilterAction';

const MovieFilterSlider = () => {
    const dispatch = useDispatch();
    const isMounted = useRef(false);

    const {
        keyword,
        sortBy,
        withGenres,
        includeVideo,
        releaseDateGte,
        releaseDateLte,
        voteAverageGte,
        voteAverageLte,
      } = useSelector((state) => state.filter);

      useEffect(() => {
        if (isMounted.current) {
          dispatch(
            movieFilterAction.getMovieFilter(
              keyword,
              sortBy,
              withGenres,
              includeVideo,
              releaseDateGte,
              releaseDateLte,
              voteAverageGte,
              voteAverageLte
            )
          );
        } else {
          isMounted.current = true;
        }
      }, [keyword, sortBy]);

  return (
    <div>MovieFilterSlider</div>
  )
}

export default MovieFilterSlider