import { Box, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import TextField from "../Common/TextField";
import Button from "../Common/Button";
import Typography from "../Common/Typography";

import CloseIcon from "@mui/icons-material/Close";

export default function BookFormModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const disabled = false;
  return (
    <Box>
      <button onClick={handleOpen}>open</button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          backgroundColor: "white",
          "& .MuiBackdrop-root": {
            backgroundColor: "white",
          },
        }}
      >
        <Box height="100%">
          <Box position="relative">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "20px",
                borderBottom: "2px solid #e1ddce",
              }}
            >
              <Typography sx={{ fontSize: "30px" }}>Add Book </Typography>
            </Box>
          </Box>
          <CloseIcon
            sx={{
              position: "absolute",
              top: "10px",
              right: "20px",
              color: "#e9e5d7",
            }}
          />
          <Stack
            height="calc(100% - 85px)"
            position="relative"
            alignItems="center"
            gap={4}
            justifyContent="center"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                padding: "30px",
              }}
            >
              <Stack>
                <Stack>
                  <TextField
                    required
                    sx={{
                      margin: "10px 20px",
                      color: "#e1ddce",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e1ddce",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#e1ddce",
                      },
                    }}
                    label="Name"
                  />

                  <TextField
                    required
                    sx={{
                      margin: "10px 20px",
                      color: "#e1ddce",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e1ddce",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#e1ddce",
                      },
                    }}
                    label="Description"
                  />
                </Stack>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <TextField
                    required
                    sx={{
                      margin: "10px 20px",
                      color: "#e1ddce",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e1ddce",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#e1ddce",
                      },
                    }}
                    label="Price"
                  />

                  <TextField
                    sx={{
                      margin: "10px 20px",
                      color: "#e1ddce",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e1ddce",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#e1ddce",
                      },
                    }}
                    label="Discount"
                  />
                </Box>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  width: "200px",
                  height: "150px",
                  border: "2px dotted #d1b598",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "#fefaf6",
                  }}
                >
                  Click here or drag and drop to upload the image
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                transform: "translateY(-145%)",
                display: "flex",
                borderTop: "2px solid #e1ddce",
              }}
            >
              <Button
                sx={{
                  display: "flex",
                  flexGrow: 2,
                  justifyContent: "flex-start",
                  fontSize: "30px",

                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  color: "black",
                  width: "500px",
                  height: "60px",
                }}
                variant="text"
              >
                <Typography fontWeight={400} fontSize={26}>
                  Cancel
                </Typography>
              </Button>
              <Button
                sx={{
                  fontSize: "30px",
                  flexGrow: 1,
                  backgroundColor: disabled ? "#f7f7f7" : "#f3eae1",
                  "&:hover": {
                    backgroundColor: disabled ? "#f7f7f7" : "#b59b84",
                  },
                  color: "black",
                  width: "300px",
                  height: "60px",
                }}
                variant="text"
                disabled={disabled}
              >
                <Typography fontWeight={400} fontSize={26}>
                  Save
                </Typography>
              </Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}
