import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import ErrorPage from "./error-page";
import JobDetails from "./components/JobDetails/JobDetails";
import HeroRegister from "./components/HeroRegister/HeroRegister";
import Login from "./components/Login/Login";
import AuthProviders from "./providers/AuthProviders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <HeroRegister></HeroRegister>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/job.json"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/job.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
