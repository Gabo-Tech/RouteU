import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRouteByName } from "../../features/routes/routesSlice";
import Route from "../Feed/Routes/Route/Route";

const Search = () => {
  const { routeName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRouteByName(routeName));
  }, [routeName]);

  return (
    <>
      <div className="container">
        <div className="col-lg-8 container-fluid">
          <h2 className="text-center">resultados de la busqueda</h2>
          <div>
            <Route />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
