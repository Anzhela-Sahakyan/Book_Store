import Button from "@mui/material/Button";
interface params {
  onClick: () => void;
  value: string;
}

export default function Btn({ onClick, value }: params) {
  return (
    <Button variant="contained" onClick={onClick}>
      {value}
    </Button>
  );
}
