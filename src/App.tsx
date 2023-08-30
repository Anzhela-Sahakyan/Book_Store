import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Header from "./Components/Header";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.page";
import Book from "./Pages/Book.page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
