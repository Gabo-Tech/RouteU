import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container-fluid notfound">
      <div className="pic">
        <div class="face">
          <div class="band">
            <div class="red"></div>
            <div class="white"></div>
            <div class="blue"></div>
          </div>
          <div class="eyes"></div>
          <div class="dimples"></div>
          <div class="mouth"></div>
        </div>
      </div>

      <h1 class="message-404">Oops! Something went wrong!</h1>
      <Link to="/">
        <div class="btn-404">Return to Home</div>
      </Link>
    </div>
  );
}

export default NotFound;
