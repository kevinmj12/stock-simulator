import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Stock from "./pages/Stock";
import Assets from "./pages/Assets";
import Transactions from "./pages/Transactions";
import Layout from "./components/layout/Layout";

const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/stock/:stockName",
    element: <Stock />,
  },
  {
    path: "/assets",
    element: <Assets />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
];

const Router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: <Error />,
    };
  })
);

export default Router;
