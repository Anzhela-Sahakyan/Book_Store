import { Box, IconButton, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "lodash";
import { useCallback, useRef } from "react";

interface SearchBoxProps {
  value: string;
  onSearchChange: (query: string) => void;
  onSearch: (query?: string) => void;
}

export default function SearchBox({
  value,
  onSearchChange,
  onSearch,
}: SearchBoxProps) {
  const debouncedSearch = useCallback(
    debounce((query: string) => onSearch(query), 300),
    []
  );

  const preValue = useRef<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = event.target.value;
    onSearchChange(inputValue);
    if (inputValue.length > 2) {
      debouncedSearch(inputValue);
    } else if (inputValue.length < preValue.current?.length) {
      onSearch(inputValue);
    }
    preValue.current = inputValue;
  };

  return (
    <Box sx={{ position: "relative", maxWidth: "fit-content" }}>
      <TextField
        label="Search"
        variant="outlined"
        value={value}
        sx={{
          margin: "30px",
          width: {
            sm: 300,
            md: 500,
          },
          height: "30px",
          color: "primary.main",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
          "& .MuiInputLabel-root": {
            color: "primary.main",
          },
        }}
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSearch();
          }
        }}
      />
      <IconButton
        type="submit"
        sx={{ position: "absolute", right: "50px", top: "41%" }}
        onClick={() => onSearch()}
      >
        <SearchIcon
          sx={{
            color: "primary.main",
          }}
        />
      </IconButton>
    </Box>
  );
}
