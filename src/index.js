import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Brands from './components/Brands';
import BrandModals from './components/BrandModals';
import Modal from './components/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
       <Route path="/brands" element={<Brands />} />
       <Route path="/brands/:id" element={<BrandModals />} />
       <Route path="/:brand/:modal" element={<Modal />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
