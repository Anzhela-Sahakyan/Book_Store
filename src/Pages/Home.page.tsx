import { Box } from "@mui/material";
import BookCards from "../Components/BookCards";
import SearchBox from "../Components/SearchBox";

export default function Home() {
  return (
    <Box>
      <SearchBox />
      <BookCards />
    </Box>
  );
}
