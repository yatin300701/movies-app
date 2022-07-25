import React from "react";
import Rating from "./Rating";
import Genres from "./Genres";
import { Link } from "react-router-dom";
import "../Styles/moviecard.css";

export default function MovieCard({ movie }) {
  return (
    <>
      <div className="movie-card-container">
        <div className="movie-card-image-container">
          <img
            src={movie.show.image.medium}
            className="movie-card-image"
            height={20}
            alt=" Imagepage"
          />
        </div>
        <div className="movie-card-description">
          <div className="movie-card-name">
            {movie.show.name} <Rating rating={movie.show.rating.average} />
          </div>
          <div className="movie-card-genre">
            <Genres genre={movie.show.genres} />
          </div>
          <div className="movie-card-link-container">
            {/* "movie-card-link" */}
            <Link to={`/movie/${movie.show.id}`} className="movie-card-link">
              Link
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
