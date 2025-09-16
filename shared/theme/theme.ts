// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/700.css";

const theme = createTheme({
  palette: {
    mode: "light", // since background is white
    background: {
      default: "#FFFFFF", // page background
      paper: "#FFFFFF",   // cards/dialog background
    },
    primary: {
      main: "#6F2D7A",   // Purple
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FAE2FF",   // Blue
    },
    success: {
      main: "#8FC642",   // Green
    },
    text: {
      primary: "#0F1728", // Black
      secondary: "#8A226F", // Purple
      tertiary: "#475467",
      lighterGrey: "#9C9797",
      disabled: "#BDBDBD",
    },
    error: {
      main: "#DE3D31"
    },
    chipColors: {
      purple: { bg: "#6F2D7A", text: "white" },
      green: { bg: "#DCFCE7", text: "#396003" },
      maroon: { bg: "#F5E2E2", text: "#BC1616" },
      grey: { bg: "white", text: "#00000080" },
      mustard: {bg: "#F5A012", text: "#ffffff"},
      pending: {bg: "#FEF9C3", text: "#A16207"},
      completed:{bg: "#ECFDF3", text: "#027A48"},
      active: {bg: "#ECFDF3", text: "#027A48"},
      inactive: {bg: "#FFF1F3", text: "#C01048"},
     


    },
   // divider: "#DBBDFD", // default
    customDivider: {
      grey: "#E0E0E0",
      default: "#DBBDFD",
    },
  },
  typography: {
    fontFamily: "Rubik, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none", // no ALL CAPS
        },
      },
    },
      MuiCssBaseline: {
        styleOverrides: {
          // Chrome, Edge, Safari
          '*::-webkit-scrollbar': {
            width: '8px',  // vertical
            height: '6px', // horizontal
          },
          '*::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '*::-webkit-scrollbar-thumb': {
            background: '#6F2D7A', // Purple
            borderRadius: '0px',   // no round edges
          },
          '*::-webkit-scrollbar-thumb:hover': {
            background: '#5A2463', // Darker on hover
          },
          '*::-webkit-scrollbar-button': {
            display: 'none',  // removes arrow buttons
          },
          '*::-webkit-scrollbar-corner': {
            background: 'transparent',
          },
        
          // Firefox
          '*': {
            scrollbarWidth: 'thin',
            scrollbarColor: '#6F2D7A transparent',
          },
        }
        
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#0871BA", // Unchecked state
          "&.Mui-checked": {
            color: "#0871BA", // Checked state
          },
          "&:hover": {
            backgroundColor: "rgba(8, 113, 186, 0.04)", // Light blue hover background
          },
        },
      },
    },
  },
});

export default theme;