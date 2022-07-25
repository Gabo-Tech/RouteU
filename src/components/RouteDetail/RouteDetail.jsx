import "./RouteDetail.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById, reset } from "../../features/routes/routesSlice";
import AddComment from "./AddComment/AddComment";
import { Space, Spin } from "antd";
import Maps from "../../components/Maps/Maps";
import { Avatar, Comment } from "antd";
import LinkMaps from "../LinkMaps/LinkMaps";
import { Collapse } from "antd";
import "antd/dist/antd.css";
const { Panel } = Collapse;

function RouteDetail() {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.routes);
  const { route } = useSelector((state) => state.routes);
  const user = JSON.parse(localStorage.getItem("user"));
  const username =
    user?.user?.name.charAt(0).toUpperCase() + user?.user?.name.slice(1);

  const getRoute = async (_id) => {
    await dispatch(getById(_id));
    dispatch(reset());
  };
  console.log(route);
  const { comments } = useSelector((state) => state.routes);

  useEffect(() => {
    getRoute(_id);
    // eslint-disable-next-line
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
          {route.name} <small> difficultad:( {route.difficulty} )</small>
        </h1>

        <div className="row">
          <div className="col-md-8">
            <img className="container" src={route.image} alt="" />
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

        <div className="group2 h-100">
          {route?.poi?.map((el) => (
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
                  {route.commentsId &&
                    route.commentsId.map((e) => {
                      console.log(e);
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

export default RouteDetail;
