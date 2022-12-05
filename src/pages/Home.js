import React, { useEffect } from "react";
import { movieActions } from "../redux/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieActions.getMovies());
  }, []);
  if (loading) {
    return <ClipLoader color="red" loading={loading} size={150} />;
  }
  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
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
