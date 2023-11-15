import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

import { ThemeProvider } from "@mui/material/styles";
import { RootStoreProvider } from "./config/RootStoreProvider";
import theme from "./config/Theme";

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RootStoreProvider>
        <App />
      </RootStoreProvider>
    </ThemeProvider>
  </React.StrictMode>
);
