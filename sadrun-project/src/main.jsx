import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App";
import Layout from "./layouts/Main-Layout/Layout";
import LandingLayout from "./layouts/Landing-Layout/LandingLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout404 from "./layouts/404-Layout/Layout404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    path: "/landing",
    element: <LandingLayout />,
  },
  {
    path: "*",
    element: <Layout404 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
