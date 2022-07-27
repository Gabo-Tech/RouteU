import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRouteByName } from "../../features/routes/routesSlice";
import Route from "../Feed/Routes/Route/Route";
import Hero from "../Hero/Hero";
import "./Search.scss";

const Search = () => {
  const { routeName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRouteByName(routeName));
  }, [routeName]);

  return (
    <>
      <Hero />
      <div class="text">
        <span>T</span>
        <span>U</span>
        <span></span>
        <span>B</span>
        <span>U</span>
        <span>S</span>
        <span>Q</span>
        <span>U</span>
        <span>E</span>
        <span>D</span>
        <span>A</span>
      </div>
      <Route />
    </>
  );
};

export default Search;
