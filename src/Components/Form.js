import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/form.css";

export default function Form({ movie }) {
  const { idd } = useParams();
  const [singleMovie, setsingleMovie] = useState({});

  function handleSubmit(e) {
    console.log(name, date);
    localStorage.setItem(name, date);
    window.location.href = "/form-filled/";
    e.preventDefault();
  }
  const [name, setname] = useState("");
  const [date, setdate] = useState({ one: new Date() });
  useEffect(() => {
    let ourMovie = movie.filter((ele, idx) => {
      return ele.show.id == idd;
    });
    setsingleMovie(ourMovie);
  }, []);
  console.log(singleMovie);
  return (
    <>
      <div className="container-form">
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-top">
            <img
              src={`${singleMovie[0]?.show.image.original}`}
              className="form-img"
              width={30}
              alt=""
            />
          </div>

          <div className="name-form">{singleMovie[0]?.show.name}</div>
          <div className="form-data">
            Name :
            <input
              type="text"
              name="name"
              placeholder="Sandeep"
              required
              onChange={(e) => setname(e.target.value)}
              id=""
            />
            Number of seats :
            <input
              type="number"
              name=""
              min={1}
              max={5}
              defaultValue={1}
              id=""
            />
            Date :
            <input
              type="date"
              required
              name="date"
              id=""
              onChange={(e) => setdate({ one: e.target.value })}
            />
            Time :
            <input type="time" name="time" id="" required />
            <input type="submit" value="Submit" className="btn-form" />
          </div>
        </form>
      </div>
    </>
  );
}
