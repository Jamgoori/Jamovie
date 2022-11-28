import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
const MovieCard = ({ item }) => {
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
        }}
      >
        <div className="overLay">
          <h2>{item.title}</h2>
          <div>
            {item.genre_ids.map((id) => (
              <Badge bg="warning" text="dark">
                {genreList.find(item=>item.id==id).name}
              </Badge>
            ))}
          </div>
          <div>
            <span>{item.vote_average}</span>
            <span>{item.adult?"청불":"전체 이용가"}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
