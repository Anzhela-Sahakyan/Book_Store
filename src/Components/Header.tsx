import { Box, Typography } from "@mui/material";
import Link from "../Common/Link";

export default function Header() {
  return (
    <Box sx={{ backgroundColor: "#d9cfb4" }}>
      <Link to={"/"}>
        <Typography
          sx={{ fontSize: "30px", marginTop: "0", textDecoration: "none" }}
        >
          BOOK STORE
        </Typography>
      </Link>
    </Box>
  );
}
