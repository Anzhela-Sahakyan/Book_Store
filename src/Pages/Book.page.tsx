import { Box, Stack } from "@mui/material";

import { useParams } from "react-router-dom";

import Typography from "../Components/Common/Typography";
import CardMedia from "../Components/Common/CardMedia";
import { useEffect, useState } from "react";
import { Book } from "../Types/Book";
import { getBook } from "../api/books/booksApi";

export default function Book() {
  const [book, setBook] = useState<Book>();
  const { id } = useParams();

  const fetchBook = async () => {
    setBook(await getBook(Number(id as string)));
  };

  useEffect(() => {
    fetchBook();
  }, []);
  if (!book) {
    return "Loading";
  }

  const { name, img, price, discount = 0, description } = book;

  const priceAfterDiscount = price - price * (discount / 100);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        gap: 4,
        overflow: "hidden",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: {
          xs: "center",
          md: "unset",
        },
      }}
    >
      <Box>
        <CardMedia
          src={img}
          sx={{
            height: "513px",
            margin: {
              xs: "10px",
              md: "30px",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          margin: {
            xs: "15px",
            md: "30px",
          },
        }}
      >
        <Typography sx={{ fontSize: "50px" }}>{name}</Typography>
        <Stack
          sx={{
            bottom: "10px",
            right: "15px",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#ebd7cb",
              width: "fit-content",
              display: "flex",
              padding: "10px",
              gap: 1,
              borderRadius: "5px",
              margin: "20px 0",
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
          </Box>

          <Typography
            sx={{ margin: "20px 0", fontSize: "25px", fontWeight: "bold" }}
          >
            Description
          </Typography>
          <Typography maxWidth={400}>{description}</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
