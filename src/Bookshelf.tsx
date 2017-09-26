import * as React from "react";
import Book from "./Book";

import {IBookshelfProps} from "./interfaces";

class Bookshelf extends React.Component <IBookshelfProps> {
  public render() {
    const { books, name, update, shelves } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.bookshelfTitle(name)}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book: any) => (
              <li key={book.id}>
                <Book
                  book={book}
                  update={update}
                  shelves={shelves}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  private bookshelfTitle(name: any) {
    return (name.charAt(0).toUpperCase() + name.slice(1))
      .match(/[A-Z][a-z]+/g)
      .join(" ");
  }
}

export default Bookshelf;
