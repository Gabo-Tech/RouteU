import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import "./Route.scss";
import { likeRoute, dislikeRoute } from "../../../../api/ApiIndex";


const Route = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.user?._id;
 
  const [hasLiked, setHasLiked] = useState(false);

  const { routes } = useSelector((state) => state.routes);

  const routeList = routes?.map((elements) => {
    const likeOneRoute = () => {
      if(elements.likes.indexOf(userId)!==-1){
        setHasLiked(true);
      }
      hasLiked === false ? likeRoute(elements._id) : dislikeRoute(elements._id);
    };
    console.log("elements", elements._id);
    return (
      <>
        <section id="mobileFirst" className="py-5">
          <div id="mobileFirst" className="container px-4 px-lg-5 mt-5">
            <div  className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div id="noHoles" className="col mb-5">
                <div  className="card h-100">
                  <img
                    className="card-img-top"
                    src={elements.image}
                    alt="foto de la ruta"
                  />

                  <div className="card-body p-4">
                    <div className="text-center" key={elements._id}>
                      <h5 className="fw-bolder">{elements.name}</h5>
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent routeFooter">
                    <div className="text-center">
                      {" "}
                      <Link to={"/getRouteById/" + elements._id}>                        
                        <a className="btn btn-outline-dark mt-auto" href="#">
                          Detalles
                        </a>
                      </Link>
                    </div>
                    <div className="likeIcon">
                        {hasLiked ? (
                            <HeartIconFilled onClick={likeOneRoute} id="likeBtn" className="btn text-red-500"/>
                        ) : (
                            <HeartIcon onClick={likeOneRoute} id="likeBtn" className="btn"/>
                        )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </>
    );
  });
  return <div id="noHoles" className="group">{routeList}</div>;
};

export default Route;
