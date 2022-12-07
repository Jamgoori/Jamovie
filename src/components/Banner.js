import React from "react";

const Banner = ({ movie }) => {
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
            ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
      >
        <div className="bannerText">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
