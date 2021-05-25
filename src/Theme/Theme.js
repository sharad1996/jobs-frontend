import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

/*
typography: Object
  htmlFontSize: 16
  pxToRem: f ()
  round: f T()
  fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
  fontSize: 14
  fontWeightLight: 300
  fontWeightRegular: 400
  fontWeightMedium: 500
  fontWeightBold: 700
  h1: Object
    fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
    fontWeight: 300
    fontSize: "6rem"
    lineHeight: 1.167
    letterSpacing: "-0.01562em"
  h2: Object
  h3: Object
  h4: Object
  h5: Object
  h6: Object
  subtitle1: Object
  subtitle2: Object
  body1: Object
    fontFamily: ""Roboto", "Helvetica", "Arial", sans-serif"
    fontWeight: 400
    fontSize: "1rem"
    lineHeight: 1.5
    letterSpacing: "0.00938em"
*/

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: "#EB8F0E" },
      secondary: { main: "#29647E" },
      background: {
        default: "#ffffff",
      },
    },
    status: {
      danger: "orange",
    },
    typography: {
      fontFamily: ["Montserrat", "Helvetica Neue", "Arial", "sans-serif"].join(","),
    },
  })
);
export default theme;
