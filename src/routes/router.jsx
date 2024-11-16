import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../layouts/Home";
import About from "../components/About";
import AllTreatments from "../components/AllTreatments";
import MyAppontments from "../components/MyAppointments";
import MyAppointments from "../components/MyAppointments";
import Profile from "../components/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/allTreatments",
        element: <AllTreatments></AllTreatments>,
      },
      {
        path: "/myAppointments",
        element: <MyAppointments></MyAppointments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
