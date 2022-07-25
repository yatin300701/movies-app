import React from "react";
import MovieCard from "./MovieCard";
import "../Styles/main.css";
import topbg from "../images/netflix.png";

export default function Main({ movie }) {
  //   console.log(movie);
  return (
    <>
      <div className="main-container">
        <div
          className="main-top"
          style={{
            backgroundImage: `url(${topbg})`,
            opacity: 0.7,
          }}
        >
          <h1>Movies</h1>
        </div>
        <div className="main-bottom">
          <div className="main-bottom-top">New Releases</div>
          <div className="main-bottom-btm">
            {movie.map((ele, indx) => {
              return <MovieCard key={indx} movie={ele} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
