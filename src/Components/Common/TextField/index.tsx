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
  required?: boolean;
  multiline?: boolean;
  type?: MuiTextFieldProps["type"];
  name?: string;
  maxRows?: number;
  InputProps?: MuiTextFieldProps["inputProps"];
}

export default function TextField({
  label,
  onChange,
  sx,
  value,
  variant,
  required,
  multiline,
  type,
  name,
  maxRows,
  InputProps,
}: TextFieldProps) {
  const defaultStyle = {
    color: "primary.main",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "primary.main",
    },
    "& .MuiInputLabel-root": {
      color: "primary.main",
    },
  };
  return (
    <MuiTextField
      label={label}
      onChange={onChange}
      sx={{ ...defaultStyle, ...sx }}
      value={value}
      variant={variant}
      required={required}
      multiline={multiline}
      type={type}
      name={name}
      maxRows={maxRows}
      inputProps={InputProps}
    />
  );
}
