import React, { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieFilterAction } from "../redux/actions/movieFilterAction";

const Movies = () => {
  const dispatch = useDispatch();
  const {
    loading,
    moreMoviesData,
    moreMoviesDataLoading,
    genreListData,
    keyword,
    sortBy,
    withGenres,
    includeVideo,
    releaseDateGte,
    releaseDateLte,
    voteAverageGte,
    voteAverageLte,
  } = useSelector((state) => state.filter);
  const [mergedData, setMergeData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  return (
    <div>Movies</div>
  )
}

export default Movies