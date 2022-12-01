import React, { useEffect } from "react";
import { movieDetailAction } from "../redux/actions/movieDetailAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams();

  const {
    movieDetail2
  } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(movieDetailAction.getMovieDetail({id}));
  }, [],console.log("Effect완료"),
  console.log("테스트",movieDetail2));
  return (
  <>
   <div> {movieDetail2.title} 안녕

   </div>
  </>
  )
};

export default MovieDetail;
