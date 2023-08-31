import { Box, Stack } from "@mui/material";
import Button from "../Common/Button";
import { ChangeEvent, ReactNode } from "react";
import CardMedia from "../Common/CardMedia";

interface ImageUploadProps {
  children?: ReactNode;
  image?: string;
  onImageChange: (image: string) => void;
}

export default function ImageUpload({
  children,
  image,
  onImageChange,
}: ImageUploadProps) {
  const handleImageUpload = (image?: File) => {
    if (image) {
      if (image) {
        const reader = new FileReader();

        reader.onload = (event) => {
          const base64String = event.target?.result;
          onImageChange(base64String as string);
        };

        reader.readAsDataURL(image);
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];
    handleImageUpload(image);
  };

  const handleRemove = () => onImageChange("");

  return image ? (
    <Stack
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      sx={{
        border: "none",
        p: 0,
        background: "transparent",
      }}
    >
      <CardMedia sx={{ maxWidth: 200, maxHeight: 400 }} src={image} />
      <Box display="flex" gap={1} mt={2}>
        <Button color="error" onClick={handleRemove}>
          Remove
        </Button>
        <Button
          variant="outlined"
          component="label"
          sx={{ color: "secondary.dark" }}
        >
          Replace
          <input hidden accept="image/*" type="file" onChange={handleChange} />
        </Button>
      </Box>
    </Stack>
  ) : (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      sx={{
        border: "none",
        p: 0,
        background: "transparent",
      }}
    >
      <Button variant="contained" component="label">
        {children}
        <input hidden accept="image/*" type="file" onChange={handleChange} />
      </Button>
    </Stack>
  );
}
