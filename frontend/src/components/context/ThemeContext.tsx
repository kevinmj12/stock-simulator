import { GlobalStyle } from "@/style/global";
import { createContext, ReactNode } from "react";

export const state = {};

export const ThemeContext = createContext(state);

export const StockSimulatorThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
