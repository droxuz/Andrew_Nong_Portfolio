import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import ContactPage from './Pages/ContactPage/ContactPage';

const router = createBrowserRouter([
  {path:"/",element:<LandingPage />},
  {path:"/about",element:<AboutPage />},
  {path:"/project",element:<ProjectPage />},
  {path:"/contact",element:<ContactPage />},
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
