import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/routes/routesSlice";
import { Card } from "antd";
import { Space, Spin } from "antd";

function RouteDetail() {
  const { isLoading } = useSelector((state) => state.routes);
  const { route } = useSelector((state) => state.routes);
  const { _id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(_id));
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
      <h2>route detail</h2>
      <hr />
      <div title="Detalles del Post" className="post-card card">
        <div type="inner" title={route.name}></div>
      </div>
    </>
  );
}

export default RouteDetail;
