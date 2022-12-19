import React, { useEffect, useState, useRef, useCallback } from "react";
import { movieFilterAction } from "../redux/actions/movieFilterAction";
import { useDispatch, useSelector } from "react-redux";
import MovieFilterButton from "../components/MovieFilterButton";
import FilteredMovieList from "../components/FilteredMovieList";
import MovieFilterInput from "../components/MovieFilterInput";
import MovieFilterSlider from "../components/MovieFilterSlider";
import api from "../redux/api";


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

  const [mergedData, setMergeData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const getMoreMovies = async (
    keyword,
    sortBy,
    withGenres,
    includeVideo,
    releaseDateGte,
    releaseDateLte,
    voteAverageGte,
    voteAverageLte,
    pageNum
  ) => {
    dispatch({ type: "GET_MORE_MOVIES_REQUEST" });

    const API_KEY = process.env.REACT_APP_API_KEY;

    const loadMoreMovies = await api.get(
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

    dispatch({
      type: "GET_MORE_MOVIES_SUCCESS",
      payload: loadMoreMovies.data,
    });

    if (moreMoviesData.results && moreMoviesData.results.length === 0) {
      setHasMore(false);
      setMergeData((prevData) => [
        ...new Set([...prevData, ...loadMoreMovies.data.results]),
      ]);
    } else {
      setHasMore(true);
      setMergeData((prevData) => [
        ...new Set([...prevData, ...loadMoreMovies.data.results]),
      ]);
    }
  };

  const observer = useRef();

  const lastMovieElementRef = useCallback(
    (node) => {
      if (moreMoviesDataLoading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum((prevPageNum) => prevPageNum + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [moreMoviesDataLoading, hasMore]
  );

  useEffect( ()=>{
    dispatch(movieFilterAction.getMovieFilter())
    }, []);

    useEffect(() => {
      getMoreMovies(
        keyword,
        sortBy,
        withGenres,
        includeVideo,
        releaseDateGte,
        releaseDateLte,
        voteAverageGte,
        voteAverageLte,
        pageNum
      );
    }, [pageNum]);
  
    useEffect(() => {
      getMoreMovies(
        keyword,
        sortBy,
        withGenres,
        includeVideo,
        releaseDateGte,
        releaseDateLte,
        voteAverageGte,
        voteAverageLte,
        pageNum
      );
      setPageNum(1);
      setMergeData([]);
    }, [
      keyword,
      sortBy,
      withGenres,
      includeVideo,
      releaseDateGte,
      releaseDateLte,
      voteAverageGte,
      voteAverageLte,
    ]);

  return <div>
    
    <div>
    <input
          type={"checkbox"}
          id="MoviesHandler_container_checkbox"
          style={{ display: "none" }}
        />

            <div className="MoviesHandler_container">
            <MovieFilterInput />
            <MovieFilterSlider
              min={1990}
              max={2020}
              text={"YEAR FILTER"}
              id={"year"}
            />
            <MovieFilterSlider
              min={1}
              max={10}
              text={"IBM SCORE FILTER"}
              id={"score"}
            />
            <MovieFilterButton text={"GENRES"} genreList={genreList} />
          </div>
          <label
            htmlFor="MoviesHandler_container_checkbox"
            className="MoviesHandler_toggleButton"
          >
            <p className="MoviesHandler_toggleButton_text">FILTER</p>
          </label>
    </div>

 <div className="MovieListWrapper">
  
            <FilteredMovieList
              movies={mergedData}
              innerRef={lastMovieElementRef}
            />
          
        </div>
  </div>;
};

export default Movies;
