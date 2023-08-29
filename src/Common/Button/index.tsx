import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  SxProps,
} from "@mui/material";
import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  variant?: MuiButtonProps["variant"];
  disabled?: boolean;
  sx?: SxProps;
}

export default function Button({
  onClick,
  children,
  variant,
  sx,
  disabled,
}: ButtonProps) {
  return (
    <MuiButton
      disabled={disabled}
      variant={variant ?? "contained"}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
}
