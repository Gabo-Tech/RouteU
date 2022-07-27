import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import "antd/dist/antd.css";
import MyForm from "./components/Form/Form";
import Profile from "./components/Profile/Profile";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import PrivateZone from "./guards/PrivateZone";
import Feed from "./components/Feed/Feed";
import RouteDetail from "./components/RouteDetail/RouteDetail";
import MyMap from "./components/MyMap/MyMap";
import Maps from "./components/Maps/Maps";
import Search from "./components/Search/Search";

// import AdminZone from "./guards/AdminZone";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/getRouteById/:_id" element={<RouteDetail />} />
        <Route path="/form" element={<MyForm />} />
        <Route
          path="/map"
          element={
             <Maps />
          }
        />
        <Route path="/profile" element={<Profile />} />        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        <Route path="*" element={<NotFound />} />

        <Route
          path="/profile"
          element={
            <PrivateZone>
              <Profile />
            </PrivateZone>
          }
        />       

        <Route path="/search/:routeName" element={<Search />} />
      </Routes>

      <AppBar />
    </BrowserRouter>
  );
}
