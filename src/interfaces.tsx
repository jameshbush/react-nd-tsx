// Interfaces

// export interface IAppProps {
// }

export interface ISearchBooksProps {
  query: string;
  updateQuery: (query: string) => void;
}

export interface IBookcaseProps {
  books: IBook[];
  query: string;
  update: (book: IBook, shelf: string) => void;
}

export interface IBookshelfProps {
  books: IBook[];
  name: string;
  update: (book: IBook, shelf: string) => void;
  shelves: IShelf[];
}

export interface IBookProps {
  book: IBook;
  update: (book: IBook, shelf: string) => void;
  shelves: IShelf[];
}

export interface IBookshelfChangerProps {
  book: IBook;
  shelves: IShelf[];
  update: (book: IBook, shelf: string) => void;
}

//

export interface IApp {
}

export interface IBookcase {
}

export interface IBookshelf {
}

export interface IBook {
  id: string;
  shelf?: string;
  title: string;
  authors: string[];
}

export interface IShelf {
  key: string;
  name: string;
  books?: IBook[];
}

export interface IBookshelfChanger {
}

export interface ISearchBooks {
}
