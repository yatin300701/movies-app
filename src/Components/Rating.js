import React from "react";
import "../Styles/rating.css";
// /movie/:id"
export default function Rating({ rating }) {
  return <>{rating ? <button className="rating-btn">{rating}</button> : ""}</>;
}
