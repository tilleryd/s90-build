import { lighten, rgb } from "polished";

const colors = {
  primary: "#000", // Color for buttons or links
  primaryLight: lighten(0.05, "#4f4e4f"),
  bg: rgb(254, 248, 206), // Background color
  grey: {
    dark: "rgba(0, 0, 0, 0.9)",
    default: "rgba(0, 0, 0, 0.7)",
    light: "rgba(0, 0, 0, 0.5)",
    ultraLight: "rgba(0, 0, 0, 0.25)",
  },
  white: "white",
  bgLight: rgb(255, 252, 234), // Complimentary bg color
};

const transitions = {
  normal: "0.5s",
};

const fontSize = {
  small: "0.9rem",
};

const fontFamily = {
  sansSerif: `'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
};

const breakpoints = {
  tablet: "1200px",
  phone: "600px",
};

const theme = {
  colors,
  transitions,
  fontSize,
  breakpoints,
  fontFamily,
  maxWidth: "1000px",
  baseFontSize: "18px",
};

export default theme;
