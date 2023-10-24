import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homec } from './Componentes/home/Homec';
import { Login } from './Componentes/login/login';
import { Form1 } from './Componentes/logut/logutc';
import { Admin } from './Componentes/admin/admin';
import { IndexPage } from './Componentes/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="comprar" element={<Homec/>}/>
      <Route path="registro" element={<Form1/>}/>
      <Route path="administrador" element={<Admin/>}/>
      <Route path="ingresar" element={<Login/>}/>

      
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
