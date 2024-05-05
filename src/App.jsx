import React from "react";
import Routes from "./Routes/Routes";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your custom theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
