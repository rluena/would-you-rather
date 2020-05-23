import { blue, red, yellow, neutral } from "./colors";
import { spacing } from "./spacing";

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
      default: neutral[100],
      button: {
        primary: {
          default: neutral[100],
          success: neutral[100],
          warning: neutral[100],
          danger: neutral[100],
          disabled: neutral[100],
        },
      },
      card: {
        heading: neutral[100],
        headingDark: neutral[500],
        question: blue[400],
        scoreBox: neutral[100],
      },
      box: {
        text: blue[200],
      },
    },
    background: {
      button: {
        primary: {
          default: blue[200],
          warning: yellow[100],
          danger: red[200],
          disabled: "",
        },
      },
      hr: neutral[200],
      card: {
        wrapper: neutral[200],
        header: blue[200],
        rightContent: neutral[100],
        scoreBox: blue[200],
      },
    },
  },
  spacing: { ...spacing },
  size: {
    button: {
      small: `${spacing.s}`,
      default: `${spacing.m} ${spacing.l}`,
      large: `${spacing.l} ${spacing.m}`,
    },
    card: {
      padding: {
        header: `${spacing.m} ${spacing.l}`,
        content: `${spacing.l}`,
        leftContent: `${spacing.m} ${spacing.l}`,
        rightContent: `${spacing.m} ${spacing.l}`,
        questionsBox: `${spacing.m} ${spacing.l}`,
      },
    },
  },
  border: {
    avatar: `2px solid ${blue[100]}`,
  },
  shadow: {
    card: {
      wrapper: "0px 2px 2px rgba(0, 0, 0, 0.15)",
    },
  },
  media: {},
};
