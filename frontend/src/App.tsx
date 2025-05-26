import { RouterProvider } from "react-router-dom";
import { StockSimulatorProvider } from "./components/context/ThemeContext";
import Router from "./Router";

function App() {
  return (
    <StockSimulatorProvider>
      <RouterProvider router={Router} />
    </StockSimulatorProvider>
  );
}

export default App;
