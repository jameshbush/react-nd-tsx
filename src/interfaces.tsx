// Interfaces

// export interface IAppProps {
// }

export interface ISearchBooksProps {
  query: string;
  updateQuery: (query: string) => void;
}

export interface IShelvedBookIds {
  [key: string]: string[];
}

export interface IBookcaseProps {
  books: IBook[];
  query: string;
  update: (book: IBook, shelf: string) => void;
}

export interface IBookshelfProps {
  books: IBook[];
  name: string;
  update: IUpdate;
  shelves: IShelf[];
}

export interface IBookProps {
  book: IBook;
  update: IUpdate;
  shelves: IShelf[];
}

export interface IBookshelfChangerProps {
  book: IBook;
  shelves: IShelf[];
  update: IUpdate;
}

//

export interface IApp {
}

export type IUpdate = (book: IBook, shelf: string) => void;

export interface IBookcase {
}

export interface IBookshelf {
}

export interface IBook {
  allowAnonLogging: boolean;
  authors: string[];
  averageRating: number;
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  id: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  industryIdentifiers: Array<{
    identifier: string;
    type: string;
  }>;
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: {
    containsEpubBubbles: false;
    containsImageBubbles: false;
  };
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  ratingsCount: number;
  readingModes: {
    image: boolean;
    text: boolean;
  };
  shelf?: string;
  subtitle: string;
  title: string;
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
