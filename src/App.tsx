import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Header />
      <SearchBox />
    </Box>
  );
}

export default App;
