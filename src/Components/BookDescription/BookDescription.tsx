import { Book } from "../../Types/Book";

interface BookCardProps {
  book: Book;
}

export default function BookDescription({ book }: BookCardProps) {
  const { name, img, price } = book;
  return (
    <div>
      {img}
      {price}
      {name}
    </div>
  );
}
