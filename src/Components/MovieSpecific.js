import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/Moviespecific.css";
import { Link } from "react-router-dom";

export default function MovieSpecific({ movie }) {
  const { idd } = useParams();

  const [singleMovie, setsingleMovie] = useState({});
  useEffect(() => {
    let ourMovie = movie.filter((ele, idx) => {
      return ele.show.id == idd;
    });
    setsingleMovie(ourMovie);
  }, []);
  return (
    <>
      {/* ms = movie specific */}
      <div className="ms-container">
        <div
          className="ms-top"
          style={{
            backgroundImage: `url(${singleMovie[0]?.show.image.original})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            opacity: 0.6,
          }}
        ></div>
        <div className="ms-sub-container">
          <div className="ms-container-left">
            <img
              src={singleMovie[0]?.show.image.original}
              className="image-ms"
              // style={{ height: 480 }}
              alt=""
            />
          </div>
          <div className="ms-right">
            <div className="ms-name">{singleMovie[0]?.show.name}</div>
            <div className="ms-lang-status">
              <span>{singleMovie[0]?.show.language}</span>
              <span>{singleMovie[0]?.show.rating.average}</span>
            </div>
            <div className="ms-genres">
              Genre :
              {singleMovie[0]?.show.genres.map((ele) => {
                return <span className="ms-span"> {ele} </span>;
              })}
            </div>
            <div className="ms-summary">{singleMovie[0]?.show.summary}</div>
            <div className="btn-ms">
              <Link to={`/book/${singleMovie[0]?.show.id}`} className="link">
                Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
