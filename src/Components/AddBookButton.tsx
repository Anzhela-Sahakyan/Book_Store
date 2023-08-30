import Button from "../Common/Button";

function AddBookButton() {
  return (
    <Button
      sx={{
        margin: " 30px",
        backgroundColor: "#f3eae1",
        "&:hover": {
          backgroundColor: "#b59b84",
        },
        color: "black",
        width: "150px",
        height: "40px",
      }}
      onClick={() => {}}
    >
      Add Book
    </Button>
  );
}

export default AddBookButton;
