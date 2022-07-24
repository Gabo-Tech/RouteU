import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../../features/routes/routesSlice";
import { Space, Spin } from "antd";
import Route from "./Route/Route";

const Routes = () => {
  const { isLoading } = useSelector((state) => state.routes);
  const dispatch = useDispatch();

  const getAllRoutesAndReset = async () => {
    await dispatch(getAll());    
    dispatch(reset());
  };

  useEffect(() => {
    getAllRoutesAndReset();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <Space className="spin">
        <Spin size="large" />
      </Space>
    );
  }

  return (
    <>
      <Route />
    </>
  );
};

export default Routes;
