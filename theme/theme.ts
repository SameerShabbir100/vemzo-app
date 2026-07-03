"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // mode: "light",
    // primary: {
    //   main: "#1976d2",
    // },
    // secondary: {
    //   main: "#9c27b0",
    // },
    background: {
      default: "#000000",
      //   paper: "#ffffff",
    },
  },

  typography: {
    // fontFamily: ["Inter", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
    //   ",",
    // ),
    // fontFamily: ["Manrope", "Roboto", "sans-serif"].join(","),
    fontFamily: "var(--font-manrope)",

    button: {
      //   textTransform: "none",
      //   fontWeight: 600,
    },
  },

  shape: {
    // borderRadius: 8,
  },

  components: {
    // MuiButton: {
    //   defaultProps: {
    //     disableElevation: true,
    //   },
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 8,
    //     },
    //   },
    // },
    // MuiTextField: {
    //   defaultProps: {
    //     fullWidth: true,
    //     variant: "outlined",
    //   },
    // },
  },
});

export default theme;
