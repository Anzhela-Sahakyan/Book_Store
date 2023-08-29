import { Box, Card, CardContent, Stack } from "@mui/material";
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
  const { name, img, price, discount = 0, id } = book;

  const priceAfterDiscount = price - price * (discount / 100);

  return (
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
          <EditIcon />
          <ClearIcon />
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
  );
}
