import Book from "../Types/Book";

export const booksMockData: Book[] = [
  {
    name: "The Great Gatsby",
    description: "A story of wealth, decadence, and the American Dream.",
    price: 12.99,
    discount: 15,
    img: "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_.jpg",
  },
  {
    name: "To Kill a Mockingbird",
    description:
      "A novel depicting the unjust treatment of a black man in the 1930s Deep South.",
    price: 9.5,
    discount: 10,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
  },
  {
    name: "1984",
    description:
      "A dystopian tale of a totalitarian society where individuality is suppressed.",
    price: 15.0,
    discount: 30,
    img: "https://m.media-amazon.com/images/I/41gH8Q32oFL.jpg",
  },
  {
    name: "Pride and Prejudice",
    description:
      "A classic romantic novel revolving around societal norms and expectations.",
    price: 8.75,
    discount: 50,
    img: "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "The Catcher in the Rye",
    description:
      "A coming-of-age story following a young man's struggles with adulthood.",
    price: 10,
    img: "https://images.45worlds.com/f/bk/jd-salinger-the-catcher-in-the-rye-11-bk.jpg",
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    description:
      "The first book in the beloved fantasy series about a young wizard's adventures.",
    price: 22.5,
    discount: 25,
    img: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
  },
  {
    name: "Brave New World",
    description:
      "A novel exploring a futuristic society driven by technological advancements and control.",
    price: 14.99,
    discount: 12,
    img: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
  },
  {
    name: "The Hobbit",
    description:
      "An epic fantasy adventure following the journey of Bilbo Baggins.",
    price: 18,
    img: "https://m.media-amazon.com/images/I/A1E+USP9f8L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Jane Eyre",
    description:
      "A Gothic romance novel portraying the life and struggles of an orphaned governess.",
    price: 11,
    discount: 22,
    img: "https://pictures.abebooks.com/isbn/9780140623253-us.jpg",
  },
  {
    name: "The Lord of the Rings",
    description:
      "A legendary fantasy trilogy that chronicles the battle between good and evil.",
    price: 27.99,
    discount: 30,
    img: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
  },
].map((book, id) => ({ ...book, id }));
