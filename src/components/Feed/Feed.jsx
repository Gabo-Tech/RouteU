import React from "react";
import Routes from "./Routes/Routes";
import "./Feed.scss";

function Feed() {
  return (
    <>
      <header className="py-5 hero">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder animate__animated animate__fadeInDown heading-section">
              RouteU
            </h1>
            <p className="lead fw-normal text-white-50 mb-0 animate__animated animate__fadeInUp ">
              Tu compañero de Ruta
            </p>
          </div>
        </div>
      </header>
      <Routes />
    </>
  );
}

export default Feed;
