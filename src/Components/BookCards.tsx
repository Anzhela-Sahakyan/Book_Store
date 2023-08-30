import { Box } from "@mui/material";
import BookCard from "./BookCard";
import Book from "../Types/Book";

interface BookCardsProps {
  books: Book[];
  fetchBooks: () => void;
}
export default function BookCards({ books, fetchBooks }: BookCardsProps) {
  return (
    <Box display="flex" gap={4} flexWrap="wrap">
      {books.map((book) => (
        <BookCard fetchBooks={fetchBooks} key={book.id} book={book} />
      ))}
    </Box>
  );
}
