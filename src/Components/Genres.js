import React from "react";

export default function Genres({ genre }) {
  return (
    <>
      {genre.map((ele, indx) => {
        return (
          <span key={indx} className="genre-span">
            {ele}
          </span>
        );
      })}
    </>
  );
}
