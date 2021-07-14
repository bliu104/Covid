import { createTheme } from "@material-ui/core/styles";

const font = "'Roboto', sans-serif;";
const IBM = "'IBM Plex Mono', monospace";

let theme = createTheme({
  typography: {
    fontFamily: font,
    h6: {
      fontFamily: IBM,
      color: "red",
    },
  },
});

export default theme;
