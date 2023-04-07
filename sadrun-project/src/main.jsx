import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App";
import Layout from "./layouts/Main-Layout/Layout";
import QA from "./components/Q&A/QA";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
