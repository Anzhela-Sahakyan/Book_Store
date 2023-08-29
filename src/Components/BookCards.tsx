import { Box } from "@mui/material";
import { booksMockData } from "../Data/Books.mock";
import BookCard from "./BookCard";

export default function BookCards() {
  console.log(booksMockData);
  return (
    <Box display="flex" gap={4} flexWrap="wrap">
      {booksMockData.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </Box>
  );
}
