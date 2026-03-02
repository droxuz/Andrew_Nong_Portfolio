import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import reportWebVitals from "./reportWebVitals";

import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/project", element: <ProjectPage /> },
  { path: "/contact", element: <ContactPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();