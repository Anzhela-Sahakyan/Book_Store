import { Box, IconButton, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

interface SearchBoxProps {
  value: string;
  onSearchChange: (query: string) => void;
  onSearch: () => void;
}

export default function SearchBox({
  value,
  onSearchChange,
  onSearch,
}: SearchBoxProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <TextField
        label="Search"
        variant="outlined"
        value={value}
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
        onChange={(event) => onSearchChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSearch();
          }
        }}
      />
      <IconButton
        type="submit"
        sx={{ position: "absolute", right: "50px", top: "41%" }}
        onClick={onSearch}
      >
        <SearchIcon
          sx={{
            color: "#e1ddce",
          }}
        />
      </IconButton>
    </Box>
  );
}
