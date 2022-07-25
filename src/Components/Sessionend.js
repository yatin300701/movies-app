import React from "react";
import "../Styles/session.css";
import { Link } from "react-router-dom";

export default function Sessionend() {
  return (
    <>
      <div className="sessionend-conatiner">
        Form Filled
        <div className="session-bottom">
          <Link to={"/"} className="link-sessionend">
            Back To Home
          </Link>
        </div>
      </div>
    </>
  );
}
