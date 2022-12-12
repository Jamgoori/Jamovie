import React ,{ useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieFilterAction } from "../redux/actions/movieFilterAction";


const MovieFilterButton = () => {
    const dispatch = useDispatch();
    const {
        keyword,
        sortBy,
        withGenres,
        includeVideo,
        releaseDateGte,
        releaseDateLte,
        voteAverageGte,
        voteAverageLte,
        pageNum
        
      } = useSelector((state) => state.filter);

      useEffect(() => {
        dispatch(movieFilterAction.getMovieFilter())
      }, []);
    

  return (
    <div>
        버튼
    </div>
  )
}

export default MovieFilterButton