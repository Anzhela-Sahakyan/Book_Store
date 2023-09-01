import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import theme from "./theme/theme";

import Header from "./Components/Header";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.page";
import Book from "./Pages/Book.page";
import { Box, CssBaseline, ThemeProvider, useTheme } from "@mui/material";

function App() {
  const outerTheme = useTheme();
  return (
    <>
      <ThemeProvider theme={theme(outerTheme)}>
        <CssBaseline />
        <Box sx={{ fontFamily: "cursive" }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/:id" element={<Book />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
