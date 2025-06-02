export type ColorKey =
  | "primary"
  | "secondary"
  | "background"
  | "text"
  | "subtext"
  | "border"
  | "rise"
  | "fall";

interface ITheme {
  color: {
    [key in ColorKey]: string;
  };
}

export const theme: ITheme = {
  color: {
    primary: "#333D4B",
    secondary: "#6B7787",
    background: "#FFFFFF",
    text: "#000000",
    subtext: "#717171",
    border: "#E1E1E1",
    rise: "#F04452",
    fall: "#3182F6",
  },
};

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
