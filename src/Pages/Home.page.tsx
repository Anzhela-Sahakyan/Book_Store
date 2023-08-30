import { Box } from "@mui/material";
import BookCards from "../Components/BookCards";
import SearchBox from "../Components/SearchBox";
import AddBookButton from "../Components/AddBookButton";
import { useEffect, useState } from "react";
import Book from "../Types/Book";
import { getBooks } from "../api/books/booksApi";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [query, setQuery] = useState("");

  const fetchBooks = async () => {
    setBooks(await getBooks(query));
  };

  const onQueryChange = (newQuery: string) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <SearchBox
          value={query}
          onSearch={fetchBooks}
          onSearchChange={onQueryChange}
        />
        <AddBookButton />
      </Box>
      <BookCards fetchBooks={fetchBooks} books={books} />
    </Box>
  );
}
