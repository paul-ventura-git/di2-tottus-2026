import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Ofertas from "../pages/Ofertas";
import Gallery from "../pages/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // <Home />
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/ofertas",
        element: <Ofertas />
      },
      {
        path: "/gallery",
        element: <Gallery />
      }
    ]
  }
])