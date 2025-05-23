import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Stock from "./pages/Stock";
import Assets from "./pages/Assets";
import Transactions from "./pages/Transactions";

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
      element: item.element,
      errorElement: <Error />,
    };
  })
);

export default Router;
