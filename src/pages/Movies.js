import React, { useEffect } from "react";
import { movieDetailAction } from "../redux/actions/movieDetailAction";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import api from '../redux/api'
import { movieAction } from "../redux/reducers/movieReducer";
import Banner from "../components/Banner";
const MovieDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const getGenres = api.get(
    `/genre/movie/list?api_key=${API_KEY}&language=en-US&region=US`
  );

  const {
    movieDetailData,
    movieReviews,
    recommendMovies,
    similarMovies,
    loading,
    movieCredits,
  } = useSelector((state) => state.detail);

  const { popularMovies, topRatedMovies, upcomingMovies} =
  useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieDetailAction.getMovieDetail(id, 1));
    dispatch(movieAction.getMoviesFail());
  }, []);
  
  if (loading) {
    return 
    <ClipLoader color="red" loading={loading} size={150} />;
  }

  return
  <>
   <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
    </div>
  </>

};

export default MovieDetail;
