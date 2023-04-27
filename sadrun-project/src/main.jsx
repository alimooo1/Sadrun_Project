import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App";
import Layout from "./layouts/Main-Layout/Layout";
import LandingLayout from "./layouts/Landing-Layout/LandingLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout404 from "./layouts/404-Layout/Layout404";
import ContactUs from "./components/Contact-Us/ContactUs";
import SingleBlogLayout from "./layouts/SingleBlog-Layout/SingleBlogLayout";
import SuccessLayout from "./layouts/Success-Layout/SuccessLayout";
import PaymentDetailLayout from "./layouts/PaymentDetail-Layout/PaymentDetailLayout";
import DashboardLayout from "./layouts/Dashboard-Layout/DashboardLAyout";
import EditProfile from "./components/Edit-Profile/Edit_Profile";
import TableDashboard from "./components/TableDashboard/TableDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/single-blog",
        element: <SingleBlogLayout />,
      },
      {
        path: "/payment-detail",
        element: <PaymentDetailLayout />,
      },
      {
        path: "/success",
        element: <SuccessLayout />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard/edit-profile",
            element: <EditProfile />,
          },
          {
            path: "/dashboard/my-courses",
            element: <TableDashboard />,
          },
          {
            path: "/dashboard/courses",
            element: <TableDashboard />,
          },
        ],
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
