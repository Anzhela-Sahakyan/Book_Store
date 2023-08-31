import { outlinedInputClasses } from "@mui/material";

import { createTheme, Theme } from "@mui/material/styles";

const theme = (outerTheme: Theme) =>
  createTheme({
    // typography: {
    //   fontFamily: [
    //     "-apple-system",
    //     "BlinkMacSystemFont",
    //     '"Segoe UI"',
    //     "Roboto",
    //     '"Helvetica Neue"',
    //     "Arial",
    //     "sans-serif",
    //     '"Apple Color Emoji"',
    //     '"Segoe UI Emoji"',
    //     '"Segoe UI Symbol"',
    //   ].join(","),
    // },
    palette: {
      mode: outerTheme.palette.mode,
      primary: {
        main: "#e1ddce",
        dark: "#d9cfb4",
      },
      secondary: {
        main: "#f3eae1",
        dark: "#b59b84",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            p: 0,
            m: 0,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#e1ddce",
            "--TextField-brandBorderHoverColor": "#d9cfb4",
            "--TextField-brandBorderFocusedColor": "#d9cfb4",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      // MuiFilledInput: {
      //   styleOverrides: {
      //     root: {
      //       "&:before, &:after": {
      //         borderBottom: "2px solid var(--TextField-brandBorderColor)",
      //       },
      //       "&:hover:not(.Mui-disabled, .Mui-error):before": {
      //         borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
      //       },
      //       "&.Mui-focused:after": {
      //         borderBottom:
      //           "2px solid var(--TextField-brandBorderFocusedColor)",
      //       },
      //     },
      //   },
      // },
      // MuiInput: {
      //   styleOverrides: {
      //     root: {
      //       "&:before": {
      //         borderBottom: "2px solid var(--TextField-brandBorderColor)",
      //       },
      //       "&:hover:not(.Mui-disabled, .Mui-error):before": {
      //         borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
      //       },
      //       "&.Mui-focused:after": {
      //         borderBottom:
      //           "2px solid var(--TextField-brandBorderFocusedColor)",
      //       },
      //     },
      //   },
      // },
    },
  });

export default theme;
