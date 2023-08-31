import { Box, IconButton, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import TextField from "./Common/TextField";
import Button from "./Common/Button";
import Typography from "./Common/Typography";

import isNumber from "../Validation/Utils/isNumber";
import isInRange from "../Validation/Utils/isInRange";

import CloseIcon from "@mui/icons-material/Close";
import { Book, BookToCreate } from "../Types/Book";
import React, { useState } from "react";
import { addBook, updateBook } from "../api/books/booksApi";
import ImageUpload from "./ImageUpload";
import isNotEmpty from "../Validation/Utils/isNotEmpty";
import { removeNonNumeric } from "../utils/removeNonNumeric";
import isStringInRange from "../Validation/Utils/isStringInRange";

interface BookFormProps {
  header: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  book?: Book;
  fetchBooks: () => void;
}

const defaultBookData = {
  name: "",
  description: "",
  price: 0,
  discount: 0,
  img: "",
} as const;

const fieldValidators: Record<
  keyof typeof defaultBookData,
  (value?: string) => boolean
> = {
  name: (value?: string) =>
    value === undefined
      ? false
      : isNotEmpty(value) && isStringInRange(value, 200),
  description: (value?: string) =>
    value === undefined
      ? false
      : isNotEmpty(value) && isStringInRange(value, 400),
  price: (value?: string) =>
    value !== undefined && isNumber(value) && isInRange(value, 0),
  discount: (value?: string) =>
    !value ? true : isNumber(value) && isInRange(value, 0, 100),
  img: (value?: string) => (value === undefined ? false : isNotEmpty(value)),
};

const validate = (field: keyof typeof defaultBookData, value?: string) => {
  const isValid = fieldValidators[field](value);
  return isValid;
};

export default function BookForm({
  header,
  book,
  open,
  setOpen,
  fetchBooks,
}: BookFormProps) {
  const handleClose = () => {
    setNewBook(defaultBookData);
    setOpen(false);
  };
  const disabled = false;

  const [newBook, setNewBook] = useState<BookToCreate>({
    name: book?.name ?? defaultBookData.name,
    description: book?.description ?? defaultBookData.description,
    price: book?.price ?? defaultBookData.price,
    discount: book?.discount ?? defaultBookData.discount,
    img: book?.img ?? defaultBookData.img,
  });

  const handleSaveClick = async () => {
    if (!book) {
      await addBook(newBook);
    } else {
      await updateBook({ ...newBook, id: book.id });
    }
    handleClose();
    fetchBooks();
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    numeric = false
  ) => {
    const field = event.target.name;
    setNewBook((state) => ({
      ...state,
      [field]: numeric
        ? removeNonNumeric(event.target.value)
        : event.target.value,
    }));
  };

  const handleImageChange = (image: string) => {
    setNewBook((state) => ({ ...state, img: image }));
  };

  const isValid = Object.keys(newBook).every((field) => {
    return validate(
      field as keyof typeof defaultBookData,
      String(newBook[field as keyof typeof defaultBookData])
    );
  });

  return (
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
              borderBottom: "2px solid",
              borderColor: "primary.main",
            }}
          >
            <Typography sx={{ fontSize: "30px" }}>{header}</Typography>
          </Box>
        </Box>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: "10px", right: "20px" }}
        >
          <CloseIcon
            sx={{
              color: "secondary.dark",
            }}
          />
        </IconButton>
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
                  }}
                  label="Name"
                  value={newBook.name}
                  name="name"
                  onChange={onChange}
                />
                <TextField
                  required
                  multiline
                  sx={{
                    margin: "10px 20px",
                  }}
                  label="Description"
                  value={newBook.description}
                  name="description"
                  maxRows={5}
                  onChange={onChange}
                />
              </Stack>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  required
                  sx={{
                    margin: "10px 20px",
                  }}
                  label="Price"
                  value={String(newBook.price) + "$"}
                  name="price"
                  onChange={(event) => onChange(event, true)}
                />

                <TextField
                  sx={{
                    margin: "10px 20px",
                  }}
                  label="Discount"
                  value={String(newBook.discount) + "%"}
                  name="discount"
                  onChange={(event) => onChange(event, true)}
                />
              </Box>
            </Stack>
            <ImageUpload image={newBook?.img} onImageChange={handleImageChange}>
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
            </ImageUpload>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              transform: "translateY(-145%)",
              display: "flex",
              borderTop: "2px solid",
              borderColor: "primary.main",
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
              onClick={handleClose}
            >
              <Typography fontWeight={400} fontSize={26}>
                Cancel
              </Typography>
            </Button>
            <Button
              sx={{
                fontSize: "30px",
                flexGrow: 1,
                backgroundColor: disabled ? "#f7f7f7" : "secondary.main",
                "&:hover": {
                  backgroundColor: disabled ? "#f7f7f7" : "secondary.dark",
                },
                color: "black",
                width: "300px",
                height: "60px",
              }}
              variant="text"
              disabled={disabled || !isValid}
              onClick={handleSaveClick}
            >
              <Typography fontWeight={400} fontSize={26}>
                Save
              </Typography>
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
}
