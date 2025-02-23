interface Colors {
  [key: string]: {
    [subkey: string]: string;
  };
}

const themeColors: Colors = {
  main: {
    primary: "#00081a",
    secondary: "#1976d2",
    lightPurple: "#e8daef",
    black: "#000",
    white: "#FFF",
  },
};

export default themeColors;
