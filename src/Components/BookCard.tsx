import { Box, Card, CardContent } from "@mui/material";
import Book from "../Types/Book";
import CardMedia from "../Common/CardMedia";
import Typography from "../Common/Typography";
import { Link } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const { name, img, price, discount, id } = book;
  return (
    <Link to={`/books/${id}`}>
      <Card
        sx={{
          minWidth: "200px",
          height: "300px",
          maxWidth: "200px",

          border: "1px #c4cecb solid",
        }}
      >
        <Box display="flex" justifyContent="flex-end" padding="10px">
          <EditIcon />
          <ClearIcon />
        </Box>
        <Box display="flex" justifyContent="center">
          <CardMedia
            src={img}
            sx={{
              maxWidth: "100px",
              maxHeight: "300px",
            }}
          />
        </Box>
        <CardContent>
          <Typography>{name}</Typography>
        </CardContent>
        {price} {discount}
      </Card>
    </Link>
  );
}
