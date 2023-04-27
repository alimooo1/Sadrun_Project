import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import "./global.css";
import App from "./App";
import Layout from "./layouts/Main-Layout/Layout";
import LandingLayout from "./layouts/Landing-Layout/LandingLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout404 from "./layouts/404-Layout/Layout404";
import ContactUs from "./components/Contact-Us/ContactUs";
import SingleBlogLayout from "./layouts/SingleBlog-Layout/SingleBlogLayout";
import SingleCourseLayout from "./layouts/SingleCourse-Layout/SingleCourseLayout";
import SuccessLayout from "./layouts/Success-Layout/SuccessLayout";
import PaymentDetailLayout from "./layouts/PaymentDetail-Layout/PaymentDetailLayout";
import DashboardLayout from "./layouts/Dashboard-Layout/DashboardLAyout";
import EditProfile from "./components/Edit-Profile/Edit_Profile";
import TableDashboard from "./components/TableDashboard/TableDashboard";
import Login from "./components/Login & signup/components/Login";
import Signup from "./components/Login & signup/components/Signup";
import Forget from "./components/Login & signup/components/Forgetfulnes";
import BillDetailLayout from "./layouts/BillDetail-Layout/BillDetailLayout";
import Blogs from "./components/Blogs/Blogs";
import Courses from "./components/Courses/Courses";

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
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/courses",
        element: <Courses />,
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
        path: "/single-course",
        element: <SingleCourseLayout />,
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
        path: "/bill-detail",
        element: <BillDetailLayout />,
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
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget",
    element: <Forget />,
  },
  {
    path: "*",
    element: <Layout404 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
