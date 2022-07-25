import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import MovieSpecific from "./Components/MovieSpecific";
import Form from "./Components/Form";
import Sessionend from "./Components/Sessionend";
import { useEffect, useState } from "react";

function App() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((req) => req.json())
      .then((res) => setmovie(res));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main movie={movie} />} />
          <Route path="/movie/:idd" element={<MovieSpecific movie={movie} />} />
          <Route path="/book/:idd" element={<Form movie={movie} />} />
          <Route path="/form-filled" element={<Sessionend />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
