import { Box } from "@mui/material";
import BookCards from "../Components/BookCards";
import SearchBox from "../Components/SearchBox";
import AddBookButton from "../Components/AddBookButton";
import { useEffect, useState } from "react";
import { Book } from "../Types/Book";
import { getBooks } from "../api/books/booksApi";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [query, setQuery] = useState("");

  const fetchBooks = async (newQuery?: string) => {
    setBooks(await getBooks(typeof newQuery === "string" ? newQuery : query));
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
          margin: "10px",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: {
            xs: "center",
          },
          justifyContent: "space-between",
        }}
      >
        <SearchBox
          value={query}
          onSearch={fetchBooks}
          onSearchChange={onQueryChange}
        />
        <AddBookButton fetchBooks={fetchBooks} />
      </Box>
      <BookCards fetchBooks={fetchBooks} books={books} />
    </Box>
  );
}
