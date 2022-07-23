import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container-fluid notfound">
      <div className="pic">
        <div className="face">
          <div className="band">
            <div className="red"></div>
            <div className="white"></div>
            <div className="blue"></div>
          </div>
          <div className="eyes"></div>
          <div className="dimples"></div>
          <div className="mouth"></div>
        </div>
      </div>

      <h1 className="message-404">Oops! Something went wrong!</h1>
      <Link to="/">
        <div className="btn-404">Return to Home</div>
      </Link>
    </div>
  );
}

export default NotFound;
