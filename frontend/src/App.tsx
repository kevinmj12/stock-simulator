import { RouterProvider } from "react-router-dom";
import { StockSimulatorThemeProvider } from "./components/context/ThemeContext";
import Router from "@/Router";
import { theme } from "@/style/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StockSimulatorThemeProvider>
        <RouterProvider router={Router} />
      </StockSimulatorThemeProvider>
    </ThemeProvider>
  );
}

export default App;
