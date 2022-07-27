import "../RouteDetail/RouteDetail.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { recRoutes } from "../../features/routes/routesSlice";
import AddComment from "../RouteDetail/AddComment/AddComment";
import { Space, Spin } from "antd";
import Maps from "../../components/Maps/Maps";
import { Avatar, Comment } from "antd";
import LinkMaps from "../LinkMaps/LinkMaps";
import { Collapse } from "antd";
import "antd/dist/antd.css";
const { Panel } = Collapse;

function FavDetails() {
  const { recRoute } = useSelector((state) => state.routes);
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.routes);
  const user = JSON.parse(localStorage.getItem("user"));
  const username =
    user?.user?.name.charAt(0).toUpperCase() + user?.user?.name.slice(1);
  const { comments } = useSelector((state) => state.routes);

  const getUserRoute = async () => {
    await dispatch(recRoutes(user?.user?.apiUser));
  };

  useEffect(() => {
    getUserRoute();
  }, [comments]);

  if (isLoading) {
    return (
      <Space className="spin">
        <Spin size="large" />
      </Space>
    );
  }
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <div className="container mb-5 bg-white">
        <h1 className="my-4 header-details">
          {recRoute.name} <small> | dificultad:( {recRoute.difficulty} )</small>
        </h1>

        <div className="row">
          <div className="col-md-8">
            <img className="container" src={recRoute.image} alt="" />
          </div>

          <div className="col-md-4">
            <h3 className="my-3">Descripcion de la Ruta</h3>
            <p>{recRoute.description_es}</p>
            <h3 className="my-3">Ruta al detalle</h3>
            <ul>
              <li>Comienzo de la ruta: {recRoute.startingPoint}</li>
              <li>tipo de ruta: {recRoute.type}</li>
              <li>Transporte Recomendado: {recRoute.transport}</li>
              <li>Duracion: {recRoute.duration} mins</li>
            </ul>
          </div>
        </div>

        <h3 className="my-4">Puntos de interes</h3>

        <div className="group2 h-100">
          {recRoute?.poi?.map((el) => (
            <section className="details-card">
              <div className="container">
                <div className="row">
                  <div className="col-md-10">
                    <div className="card-content shink">
                      <div className="card-img">
                        <Maps lat={el.latitude} lon={el.longitude} zoom="17" />
                        <span className="name-details">
                          <h4 className="text-white">{el.name}</h4>
                        </span>
                      </div>
                      <div className="card-desc">
                        <h3>Descripcion</h3>
                        <p>{el.description_es}</p>

                        <LinkMaps lon={el.latitude} lat={el.longitude} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className="container pb-5">
          <div>
            <div>
              <AddComment routeId={_id} />
            </div>
            <Collapse
              className="ant-collapse"
              defaultActiveKey={["0"]}
              onChange={onChange}
            >
              <Panel header="Comentarios:" key="1">
                <p>
                  {" "}
                  {recRoute.commentsId &&
                    recRoute.commentsId.map((e) => {
                      return (
                        <div key={e._id}>
                          <Comment
                            author={<p>{username}: </p>}
                            avatar={
                              <Avatar
                                src="https://placeimg.com/380/230/arch"
                                alt="Your ugly face"
                              />
                            }
                            content={<p>{e.body}</p>}
                          />
                        </div>
                      );
                    })}
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
}

export default FavDetails;
