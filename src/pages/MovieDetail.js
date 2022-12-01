// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { movieDetailAction } from "../redux/actions/movieDetailAction";
// import { useDispatch, useSelector } from "react-redux";
// import ClipLoader from "react-spinners/ClipLoader";

// const MovieDetail = () => {
//   const dispatch = useDispatch();
//   const movie_id = useParams().id;
//   const {
//     MovieDetailData,
//     MovieReviews,
//     RecommendMovies,
//     SimilarMovies,
//     loading,
//     MovieCredits,
//   } = useSelector((state) => state.movie);

//   useEffect(() => {
//     dispatch(movieDetailAction.getMovieDetail(movie_id, 1));
//   }, []);
  
//   if (loading) {
//     return <ClipLoader color="red" loading={loading} size={150} />;
//   }

//   return <div>MovieDetail</div>;
// };

// export default MovieDetail;
