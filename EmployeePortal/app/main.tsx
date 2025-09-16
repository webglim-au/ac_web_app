import React from "react";
import ReactDOM from "react-dom/client";
import App from "../app/App";
import { Provider } from 'react-redux'
import { store } from '../../EmployeePortal/store/store';
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../../shared/theme/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
