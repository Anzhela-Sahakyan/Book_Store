export interface Book {
  name: string;
  description: string;
  price: number;
  discount?: number;
  img: string;
  id: number;
}

export type BookToCreate = Omit<Book, "id">;
