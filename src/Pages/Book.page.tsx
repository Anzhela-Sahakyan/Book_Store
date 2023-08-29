import { Box, Stack } from "@mui/material";

// import { useParams } from "react-router-dom";

import Typography from "../Common/Typography";
import CardMedia from "../Common/CardMedia";
import { booksMockData } from "../Data/Books.mock";

export default function Book() {
  const book = booksMockData[0];
  const { name, img, price, discount = 0, description } = book;
  // const { id } = useParams();

  const priceAfterDiscount = price - price * (discount / 100);
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {/* {id} */}
      <Box>
        <CardMedia
          src={img}
          sx={{
            width: "342px",
            height: "513px",
            margin: "30px",
          }}
        />
      </Box>
      <Box margin={{ margin: "30px" }}>
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
          <Typography>{description}</Typography>
        </Stack>
      </Box>
    </Box>
  );
}
