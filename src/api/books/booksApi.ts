import { BookToCreate, Book } from "../../Types/Book";
import { request } from "../http";

const BOOKS_API = "/books";

export const getBooks = (query: string = ""): Promise<Book[]> =>
  request(`${BOOKS_API}?name_like=${query}`);

export const getBook = (id: number): Promise<Book> =>
  request(`${BOOKS_API}/${id}`);

export const addBook = (book: BookToCreate): Promise<Book> =>
  request(BOOKS_API, "post", book);

export const deleteBook = (id: number): Promise<Book> =>
  request(`${BOOKS_API}/${id}`, "delete");

export const updateBook = (book: Book): Promise<Book> =>
  request(`${BOOKS_API}/${book.id}`, "put", book);
