import { Box, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import Button from "../Common/Button";

export default function SearchBox() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", margin: "10px" }}
    >
      <Box sx={{ position: "relative" }}>
        <TextField
          label="Search"
          variant="outlined"
          sx={{
            margin: "30px",
            width: "500px",
            height: "30px",
            color: "#e1ddce",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e1ddce",
            },
            "& .MuiInputLabel-root": {
              color: "#e1ddce",
            },
          }}
        />
        <SearchIcon
          sx={{
            position: "absolute",
            right: "50px",
            top: "48%",
            color: "#e1ddce",
          }}
        />
      </Box>
      <Button
        sx={{
          margin: " 30px",
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
