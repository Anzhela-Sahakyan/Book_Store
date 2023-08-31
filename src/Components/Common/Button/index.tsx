import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { ReactNode } from "react";

interface ButtonProps extends MuiButtonProps {
  children: ReactNode;
  variant?: MuiButtonProps["variant"];
}

export default function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <MuiButton variant={variant ?? "contained"} {...rest}>
      {children}
    </MuiButton>
  );
}
