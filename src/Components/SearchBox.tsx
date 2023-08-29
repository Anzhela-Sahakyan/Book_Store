import { Box, TextField } from "@mui/material";
import Button from "../Common/Button";

export default function SearchBox() {
  return (
    <Box>
      <TextField label="Search" variant="outlined" sx={{ margin: "5px" }} />
      <Button onClick={() => {}}>Add Book</Button>
    </Box>
  );
}
