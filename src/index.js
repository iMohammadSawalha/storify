import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Login from './Pages/Login/Login.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' index element={Home}/>
        <Route path='/login' element={Profile}/>
        <Route path='/profile' element={Login}/>
      </Routes>
    </BrowserRouter>
    <Home/>
  </React.StrictMode>
);


