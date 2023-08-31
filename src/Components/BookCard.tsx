import { Box, Card, CardContent, IconButton, Stack } from "@mui/material";
import { Book } from "../Types/Book";
import CardMedia from "./Common/CardMedia";
import Typography from "./Common/Typography";
import Link from "./Common/Link";

import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

import { deleteBook } from "../api/books/booksApi";
import BookForm from "./BookForm";
import { useState } from "react";

interface BookCardProps {
  book: Book;
  fetchBooks: () => void;
}

export default function BookCard({ book, fetchBooks }: BookCardProps) {
  const [isBookFormOpen, setIsBookFormOpen] = useState(false);

  const { name, img, price, discount = 0, id } = book;

  const priceAfterDiscount = price - price * (discount / 100);

  const handleDelete = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    await deleteBook(id);
    fetchBooks();
  };
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setIsBookFormOpen(true);
  };

  return (
    <>
      <Link to={`/books/${id}`}>
        <Card
          sx={{
            minWidth: "300px",
            height: "450px",
            maxWidth: "200px",

            border: "1px #c4cecb solid",

            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              left: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "45px",
              backgroundColor: "#f24134",
              borderRadius: "4px",
            }}
          >
            {!!discount && `${discount} %`}
          </Box>

          <Box display="flex" justifyContent="flex-end" padding="10px">
            <IconButton onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <ClearIcon />
            </IconButton>
          </Box>

          <Box display="flex" justifyContent="center">
            <CardMedia
              src={img}
              sx={{
                maxWidth: "200px",
                maxHeight: "300px",
              }}
            />
          </Box>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography>{name}</Typography>
              <Stack
                sx={{
                  bottom: "10px",
                  right: "15px",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  sx={{
                    textDecoration: discount ? "line-through" : null,
                    textDecorationColor: "red",
                  }}
                >{`$${price}`}</Typography>
                {!!discount && (
                  <Typography
                    sx={{ color: "red" }}
                  >{`$${priceAfterDiscount}`}</Typography>
                )}
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Link>
      {isBookFormOpen && (
        <BookForm
          book={book}
          header="Edit Book"
          open={isBookFormOpen}
          setOpen={setIsBookFormOpen}
          fetchBooks={fetchBooks}
        />
      )}
    </>
  );
}
