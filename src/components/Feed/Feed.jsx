import React from "react";
import Routes from "./Routes/Routes";

function Feed() {
  return (
    <>
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">RouteU</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              Your routes companion
            </p>
          </div>
        </div>
      </header>
      <Routes />
    </>
  );
}

export default Feed;
