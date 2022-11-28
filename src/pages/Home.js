import React, { useEffect } from "react";
import { movieActions } from "../redux/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(
    (state) => state.movie
  );
  useEffect(() => {
    dispatch(movieActions.getMovies());
  }, []);

  //loading이 true라면 스피너를 보여준다. false면 데이터를 보여준다.
  //true : 데이터 도착전  false: 데이터 도착후, 에러가 났을 때
  if(loading){
    return       <ClipLoader
    color="red"
    loading={loading}
    size={150}
  />
  }
  return (
    <div>

    <Banner movie={popularMovies.results[0]} />

      <h1>Popular Movie</h1>
      <MovieSlide movie={popularMovies} />
      <h1>TopRated Movie</h1>
      <MovieSlide movie={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movie={upcomingMovies} />
    </div>
  );
};

export default Home;
