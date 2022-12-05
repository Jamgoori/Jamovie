import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const onClickImg = () => {
    navigate(`/movies/${item.id}`)
  }
  const{genreList} = useSelector(state=>state.movie)
  return (
    <>
      <div
        className="card22"
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}` +
            ")",
        }} onClick={onClickImg}
      >

      </div>
      <div className="overLay">
          <h3>{item.title}</h3>
          <div>
            {item.genre_ids.map((id) => (
              <Badge bg="warning" text="dark">
                {genreList && genreList.find(item=>item.id==id).name}
              </Badge>
            ))}
          </div>
          <div>
            <span>⭐ {item.vote_average.toFixed(1)}</span>
          </div>
        </div>
    </>
  );
};

export default MovieCard;
