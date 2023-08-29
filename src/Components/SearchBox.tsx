import { Box, TextField } from "@mui/material";

import Button from "../Common/Button";

export default function SearchBox() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", margin: "10px" }}
    >
      <TextField
        label="Search"
        variant="outlined"
        sx={{
          margin: "25px",
          width: "400px",
          height: "30px",
          color: "#e1ddce",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e1ddce",
          },
          "& .MuiInputLabel-root": {
            color: "#e1ddce",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#b6a058",
          },
        }}
      />
      <Button
        sx={{
          backgroundColor: "#f3eae1",
          "&:hover": {
            backgroundColor: "#b59b84",
          },
          color: "black",
          width: "150px",
          height: "40px",
        }}
        onClick={() => {}}
      >
        Add Book
      </Button>
    </Box>
  );
}
