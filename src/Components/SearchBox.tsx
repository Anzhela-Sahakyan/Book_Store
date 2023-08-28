import { Box, TextField } from "@mui/material";
import Btn from "../Button/Btn";

export default function SearchBox() {
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ margin: "5px" }}
      />
      <Btn onClick={() => {}} value="Add Book" />
    </Box>
  );
}
