import React, { useEffect } from "react";
import { movieDetailAction } from "../redux/actions/movieDetailAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams();

  const {
    movieDetail
  } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(movieDetailAction.getMovieDetail({id}));
  }, []);
  
  return (
  <>
   <div> {movieDetail.title} 안녕

   </div>
  </>
  )
};

export default MovieDetail;
