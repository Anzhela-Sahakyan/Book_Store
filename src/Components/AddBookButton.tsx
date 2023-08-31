import { useState } from "react";
import Button from "./Common/Button";
import BookForm from "./BookForm";

interface AddBookButtonProps {
  fetchBooks: () => void;
}

function AddBookButton({ fetchBooks }: AddBookButtonProps) {
  const [isBookFormOpen, setIsBookFormOpen] = useState(false);

  const handleClick = () => {
    setIsBookFormOpen(true);
  };

  return (
    <>
      <Button
        sx={{
          margin: " 30px",
          backgroundColor: "secondary.main",
          "&:hover": {
            backgroundColor: "secondary.dark",
          },
          color: "black",
          width: "150px",
          height: "40px",
        }}
        onClick={handleClick}
      >
        Add Book
      </Button>
      {isBookFormOpen && (
        <BookForm
          open={isBookFormOpen}
          setOpen={setIsBookFormOpen}
          header="Add Book"
          fetchBooks={fetchBooks}
        />
      )}
    </>
  );
}

export default AddBookButton;
