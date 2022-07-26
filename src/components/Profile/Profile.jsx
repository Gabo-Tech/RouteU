import React, { useEffect } from "react";
import styles from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
// import { getDataScienceRecommendedRoute, getRouteByIdData } from "../../api/ApiIndex"
import { recRoute } from "../../features/routes/routesSlice";
import { notification } from "antd";
import { BackTop } from "antd";
import "./Profile.scss";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const username =
    user?.user?.name.charAt(0).toUpperCase() + user?.user?.name.slice(1);
  const userId = user?.user?._id;
  const { routes } = useSelector((state) => state.routes);
  // const { recRoutes} = useSelector((state) => state.recRoutes);
  // console.log(recRoutes)
  const routesLS = JSON.parse(localStorage.getItem("routes"));
  // console.log("This is local routes", routesLS, "THIS IS REDUX ROUTES", routes);
  function getFavouriteRoutes(arrayElement) {
    const likes = arrayElement?.likes;
    // console.log("THIS IS LIKES", likes);
    const favRoute = likes?.indexOf(userId);
    // console.log("THIS IS FAVROUTES", favRoute);
    const res = favRoute === -1 ? null : arrayElement;
    // console.log("THIS IS RES", res);
    return res;
  }
  let routeList = [];
  const userFavouriteRoutes =
    routes === []
      ? routes?.map(getFavouriteRoutes)
      : routesLS?.map(getFavouriteRoutes);
  const onLogout = async () => {
    await dispatch(logout());
    notification.success({ message: "Hasta la próxima!" });
    navigate("/login");
  };


  const getUserRoute = async () => {    
    await dispatch(recRoute(user?.user?.apiUser));    
  };
  

  useEffect(() => {
    getUserRoute();        
    // eslint-disable-next-line
  }, [recRoute]);

  if (userFavouriteRoutes.length <= 0) {
    routeList =
      "Oh oh... Parece que no tienes rutas favoritas todavía, ¡vuelve a la página de inicio para encontrar nuevos caminos por recorrer!";
  } else {
    const userFavouriteRoutesClean = userFavouriteRoutes.filter(
      (arrayElement) => arrayElement !== null
    );
    routeList = userFavouriteRoutesClean?.map((elements) => {
      return (
        <>
          <section className="py-5">
            <Link to={"/getRouteById/" + elements._id}>
              <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  <div className="col mb-2">
                    <div className="card h-5">
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
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        </>
      );
    });
  }
  return (
    <>
      <div className="padding">
        <div className="col-md-8">
          <div className="card profile-card">
            {" "}
            <img
              className="card-img-top"
              src="http://placeimg.com/800/600/tech"
              alt="Card image cap"
            />
            <div className="card-body little-profile text-center">
              <div className="pro-img">
                <img src="http://placeimg.com/800/600/people" alt="user" />
              </div>
              <h3 className="m-b-0">Hola {username}!</h3>
              <p>{user.user.role}</p>{" "}
              <button onClick={onLogout} className="btn btn-rounded btn-info">
                Desconectar
              </button>
              <div className="row text-center m-t-20">
                <div className="col-lg-4 col-md-4 m-t-20">
                  <h3 className="m-b-0 font-light"></h3>
                  <small></small>
                </div>
                <div className="col-lg-4 col-md-4 m-t-20">
                  <h3 className="m-b-0 font-light">
                    {userFavouriteRoutes.length}
                  </h3>
                  <small>Rutas Favoritas</small>
                </div>
                <div className="col-lg-4 col-md-4 m-t-20">
                  <h3 className="m-b-0 font-light"></h3>
                  <small></small>
                </div>

                <div id="list-fav" className={styles.centered}>
                  {routeList}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <h1>{routeById}</h1> */}
      </div>
      <div>
        <BackTop />
        Scroll down to see the bottom-right
        <strong className="site-back-top-basic"> gray </strong>
        button.
      </div>
      {/* <Main className={styles.full} pad="xlarge">
        <Heading>Hola {username}!</Heading>
        <Box
          className={styles.pic}
          direction="row"
          justify="center"
          gap="small"
          pad="large"
        >
          <Avatar size="xlarge" src="https://placeimg.com/380/230/arch" />
        </Box>
        <Box direction="row" justify="center" gap="small">
          <Text direction="row" justify="center">
            Tus rutas favoritas
          </Text>
        </Box>
        <div className={styles.centered}>{routeList}</div>
      </Main> */}
    </>
  );
}
