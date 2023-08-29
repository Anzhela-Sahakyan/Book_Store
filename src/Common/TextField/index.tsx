import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  SxProps,
} from "@mui/material";

interface TextFieldProps {
  label?: string;
  variant?: MuiTextFieldProps["variant"];
  onChange?: MuiTextFieldProps["onChange"];
  value?: string;
  sx?: SxProps;
}

export default function TextField({
  label,
  onChange,
  sx,
  value,
  variant,
}: TextFieldProps) {
  return (
    <MuiTextField
      label={label}
      onChange={onChange}
      sx={sx}
      value={value}
      variant={variant}
    />
  );
}
