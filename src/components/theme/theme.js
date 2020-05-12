import { blue, red, yellow, neutral } from "./colors";

export const defaultTheme = {
  font: {
    family: {
      primary: '"Roboto Mono", Arial',
      secondary: "",
    },
    scale: {
      h1: "1.8rem",
      h2: "1.6rem",
      h3: "1.4rem",
      h4: "1.2rem",
      h5: "1.1rem",
      paragraph: "1rem",
      helper: "0.8rem",
      small: "0.7rem",
      x_small: "",
    },
    weight: {
      bold: "",
      normal: "",
      thin: "",
    },
  },
  color: {
    text: {
      button: {
        primary: {
          default: neutral[100],
          success: neutral[100],
          warning: neutral[100],
          danger: neutral[100],
          disabled: neutral[100],
        },
      },
    },
    background: {
      button: {
        primary: {
          default: blue[400],
          // success: green[400],
          warning: yellow[100],
          danger: red[300],
          disabled: "",
        },
      },
      card: {
        default: neutral[100],
      },
    },
  },
  spacing: {
    default: "16px",
    xxs: "2px",
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "32px",
    xl: "64px",
  },
  media: {},
};
