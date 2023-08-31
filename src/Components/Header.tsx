import { Box, Typography } from "@mui/material";
import Link from "./Common/Link";

export default function Header() {
  return (
    <Box sx={{ backgroundColor: "primary.dark" }}>
      <Typography
        sx={{
          fontSize: "30px",
          marginTop: "0",
          textDecoration: "none",
          padding: "10px",
        }}
      >
        <Link to={"/"}>BOOK STORE</Link>
      </Typography>
    </Box>
  );
}
