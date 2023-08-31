import { CardMedia as MuiCardMedia, SxProps } from "@mui/material";

interface CardMediaProps {
  src: string;
  alt?: string;
  sx?: SxProps;
}

export default function CardMedia({ sx, src, alt }: CardMediaProps) {
  return (
    <MuiCardMedia component="img" src={src} alt={alt ?? "Photo"} sx={sx} />
  );
}
