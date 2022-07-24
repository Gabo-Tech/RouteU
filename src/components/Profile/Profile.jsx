// import React, { useEffect, useState } from "react";
import styles from './Profile.module.css';
import { useSelector } from "react-redux";
import { Box, Text, Avatar, Heading , Main} from 'grommet';
import { Link } from "react-router-dom";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user?.user?.name.charAt(0).toUpperCase() + user?.user?.name.slice(1);
  const userId = user?.user?._id;
  const { routes } = useSelector((state) => state.routes);
  function getFavouriteRoutes(arrayElement) {
    const likes=arrayElement.likes;
    const favRoute = likes.indexOf(userId);
    const res = favRoute === -1 ? null : arrayElement ;
    return res;
  };
  let routeList = [];  
  const userFavouriteRoutes = routes.map((getFavouriteRoutes));
if (userFavouriteRoutes.length <= 0){
   routeList = "Oh oh... Parece que no tienes rutas favoritas todavía, ¡vuelve a la página de inicio para encontrar nuevos caminos por recorrer!"
} else {
   const userFavouriteRoutesClean = userFavouriteRoutes.filter(arrayElement =>  arrayElement !== null);
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
      <Main className={styles.full} pad="xlarge">
        <Heading>Hola {username}!</Heading>
        <Box className={styles.pic} direction="row" justify="center" gap="small" pad="large">
          <Avatar size="xlarge" src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />   
        </Box>
        <Box direction="row" justify="center" gap="small">
          <Text direction="row" justify="center">Tus rutas favoritas</Text>
        </Box>
        <div  className={styles.centered}>{routeList}</div>
      </Main>
    </>
  )
}
