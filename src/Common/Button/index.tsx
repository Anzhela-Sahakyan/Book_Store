import { Button as MuiButton, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  sx?: SxProps;
}

export default function Button({ onClick, children, sx }: ButtonProps) {
  return (
    <MuiButton variant="contained" sx={sx} onClick={onClick}>
      {children}
    </MuiButton>
  );
}
