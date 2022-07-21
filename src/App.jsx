import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Auth from './components/Auth/Auth';
import MyForm from './components/Form/Form';
import Profile from './components/Profile/Profile';
import MyRoutes from './components/Routes/Routes';

export default function App() {
  // const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path="/routes" element={<MyRoutes />}/>
          <Route path="/form" element={<MyForm />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/auth" element={<Auth />}/>
          {/* <Route path="*" exact element={NotFound} /> */}
        </Routes>
        <AppBar/>
    </BrowserRouter>
  );
}
