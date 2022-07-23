import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/routes/routesSlice";
import { Space, Spin } from "antd";
import "./RouteDetail.scss";

function RouteDetail() {
  const { isLoading } = useSelector((state) => state.routes);
  const { route } = useSelector((state) => state.routes);
  const { _id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(_id));
    // eslint-disable-next-line
  }, []);

  console.log("route", route);

  if (isLoading) {
    return (
      <Space className="spin">
        <Spin size="large" />
      </Space>
    );
  }
  return (
    <>
      <div class="container mb-5">
        <h1 class="my-4">
          {route.name}
          <small> difficultad:( {route.difficulty} )</small>
        </h1>

        <div class="row">
          <div class="col-md-8">
            <img class="img-fluid" src={route.image} alt="" />
          </div>

          <div class="col-md-4">
            <h3 class="my-3">Descripcion de la Ruta</h3>
            <p>{route.description_es}</p>
            <h3 class="my-3">Ruta al detalle</h3>
            <ul>
              <li>Comienzo de la ruta: {route.startingPoint}</li>
              <li>tipo de ruta: {route.type}</li>
              <li>Transporte Recomendado: {route.transport}</li>
              <li>Duracion: {route.duration} mins</li>
            </ul>
          </div>
        </div>

        <h3 class="my-4">Puntos de interes</h3>

        <div class=" group2">
          {route?.poi?.map((el) => (
            <section class="details-card">
              <div class="container">
                <div class="row">
                  <div class="col-md-10">
                    <div class="card-content">
                      <div class="card-img">
                        <img
                          src="https://placeimg.com/380/230/arch"
                          alt="mapa"
                        />
                        <span>
                          <h4>{el.name}</h4>
                        </span>
                      </div>
                      <div class="card-desc">
                        <h3>Descripcion</h3>
                        <p>{el.description_es}</p>
                        <a href="#" class="btn-card">
                          Link al mapa
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default RouteDetail;
