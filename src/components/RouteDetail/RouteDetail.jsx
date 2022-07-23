import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/routes/routesSlice";
import { Space, Spin } from "antd";
import{ TextArea } from "grommet";
import "./RouteDetail.scss";
import { comment } from "../../api/ApiIndex";

function RouteDetail() {
  const { isLoading } = useSelector((state) => state.routes);
  const { route } = useSelector((state) => state.routes);
  const { _id } = useParams();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  function commentRoute(){
    comment(_id,value);
    setValue("¡Tu comentario se ha enviado con exito!");
  }
  useEffect(() => {
    dispatch(getById(_id));
    // eslint-disable-next-line
  }, []);

  console.log("route", route._id);

  if (isLoading) {
    return (
      <Space className="spin">
        <Spin size="large" />
      </Space>
    );
  }
  return (
    <>
      <div className="container mb-5">
        <h1 className="my-4">
          {route.name}
          <small> difficultad:( {route.difficulty} )</small>
        </h1>

        <div className="row">
          <div className="col-md-8">
            <img className="img-fluid" src={route.image} alt="" />
          </div>

          <div className="col-md-4">
            <h3 className="my-3">Descripcion de la Ruta</h3>
            <p>{route.description_es}</p>
            <h3 className="my-3">Ruta al detalle</h3>
            <ul>
              <li>Comienzo de la ruta: {route.startingPoint}</li>
              <li>tipo de ruta: {route.type}</li>
              <li>Transporte Recomendado: {route.transport}</li>
              <li>Duracion: {route.duration} mins</li>
            </ul>
          </div>
        </div>

        <h3 className="my-4">Puntos de interes</h3>

        <div className=" group2">
          {route?.poi?.map((el) => (
            <section className="details-card">
              <div className="container">
                <div className="row">
                  <div className="col-md-10">
                    <div className="card-content">
                      <div className="card-img">
                        <img
                          src="https://placeimg.com/380/230/arch"
                          alt="mapa"
                        />
                        <span>
                          <h4>{el.name}</h4>
                        </span>
                      </div>
                      <div className="card-desc">
                        <h3>Descripcion</h3>
                        <p>{el.description_es}</p>
                        <button href="#" className="btn-card">
                          Link al mapa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
          <div>
            <TextArea
              placeholder="¿Te ha gustado la ruta? ¡Cuéntalo!"
              value={value}
              onChange={event => setValue(event.target.value)}
            />
            <div onClick={commentRoute} className="btn-card">
              Enviar comentario
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RouteDetail;
