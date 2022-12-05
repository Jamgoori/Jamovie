import React, { useEffect } from "react";
import { movieDetailAction } from "../redux/actions/movieDetailAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import Carousel from "react-multi-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Badge } from "react-bootstrap";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieDetail = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const { movieDetail2, RecommendMovies, SimilarMovies, loading } =
    useSelector((state) => state.detail);

  useEffect(
    () => {
      dispatch(movieDetailAction.getMovieDetail(id, 1));
    },
    [],
  );
  if (loading) {
    return <ClipLoader color="red" loading={loading} size={150} />;
  }
  return (
    <>
      <div
        className="testtest"
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieDetail2.poster_path}` +
            ")",
        }}
      >
        <h1>{movieDetail2.title}</h1>
        <p>{movieDetail2.tagline}</p>
      </div>

      <div className="MovieDetail_Section">
        <h1 className="MovieDetail_Section">
          <span className="subTitle">&#10095;</span>
          <span>OVERVIEW</span>
          <span className="divide_line"></span>
        </h1>

        <div className="MovieDetail_section_overview">
          <div className="MovieDetail_section_overview_item_left">
            {movieDetail2.overview}
          </div>

          <span className="MovieDetail_section_overview_divide_line"></span>

          <div className="MovieDetail_section_overview_item_right">
            <div>
              <span>RELEASE DATE &nbsp; &nbsp;/</span>
              <span>{movieDetail2.release_date}</span>
            </div>

            <div>
              <span>RUNTIME &nbsp; &nbsp;/</span>
              <span>{movieDetail2.runtime} min</span>
            </div>

            <div>
              <div className="MovieDetail_section_overview_vote_container">
                <div>
                  <span>VOTE AVERAGE</span>
                  <span className="overview_vote_average">
                    {movieDetail2.vote_average && movieDetail2.vote_average.toFixed(1)}
                  </span>
                </div>
                <div>
                  <span>VOTE COUNT</span>
                  <span className="overview_vote_average">
                    {movieDetail2.vote_count}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span>RATED</span>
              <span>
                {!movieDetail2.adult ? (
                  <span className="overview_G_rate">G</span>
                ) : (
                  <span className="overview_adult_rate">18+</span>
                )}
              </span>
            </div>
            <span>GENRES</span>
            {movieDetail2.genres &&
              movieDetail2.genres.map((item, index) => (
                <span className="overview_genres" key={index}>
                  {item.name}
                </span>
              ))}
          </div>
        </div>

        <div>

          {/* <div className="cardFlex">
            {movieDetail2.genres &&
              RecommendMovies.results.slice(0, 5).map((item, index) => (
                <span key={index}>
                  {item.title}
                  <div
                    className="card22"
                    style={{
                      backgroundImage:
                        "url(" +
                        `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}` +
                        ")",
                    }}
                  ></div>
                </span>
              ))}
          </div> */}
                    <h1>
            <span className="subTitle">&#10095;</span>
            <span>RECOMMEND MOVIES</span>
            <span className="divide_line"></span>
          </h1>
          {RecommendMovies.results && <MovieSlide movie={RecommendMovies}/>}
          <div>
            <h1>
              <span className="subTitle">&#10095;</span>
              <span>SIMILAR MOVIES</span>
              <span className="divide_line"></span>
            </h1>
            {SimilarMovies.results && <MovieSlide movie={SimilarMovies} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
