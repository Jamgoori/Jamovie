import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const onClickImg = () => {
    navigate(`/movies/${item.id}`)
  }
  const{genreList} = useSelector(state=>state.movie)
  return (
    <article className="cardZip">
      <div
        className="moviecard"
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w440_and_h660_multi_faces/${item.poster_path}` +
            ")",
        }} onClick={onClickImg}
      >

      </div>
      <div className="overLay">
          <h2 style={{fontSize:"20px", marginTop:"0.5rem"}}>{item.title}</h2>
          <div>
            {item.genre_ids.map((id) => (
              <Badge bg="warning" text="dark" style={{marginRight:"5px"}}>
                {genreList && genreList.find(item=>item.id==id).name}
              </Badge>
            ))}
          </div>
          <div>
            <span>⭐ {item.vote_average.toFixed(1)}</span>
          </div>
        </div>
    </article>
  );
};

export default MovieCard;
