// Guidelines for organizing dependencies
// first, by distance
// then, alphabetically
// npm node modules at very top with third party dependencies
// Bookshelf is a close colaborator, so it's further down the list
// then deal with the irregular imports with require statements etc.

import * as React from "react";
import {Link} from "react-router-dom";

import Bookshelf from "./Bookshelf";
import IconOpenSearch from "./icons/IconOpenSearch";
import {IBook, IBookcaseProps, IShelf, IUpdate} from "./interfaces";

const sortBy = require("sort-by"); // tslint:disable-line no-var-requires

class Bookcase extends React.Component <IBookcaseProps> {
  public render() {
    let   books: IBook[] = this.props.books;
    const query: string = this.props.query;
    const update: IUpdate = this.props.update;
    const emptyShelves: IShelf[] = [
      { key: "currentlyReading", name: "Currently Reading" },
      { key: "wantToRead", name: "Want to Read" },
      { key: "read", name: "Read" },
      { key: "none", name: "None" },
    ];

    books = this.filterBooks(books, query);
    books = books.sort(sortBy("title"));
    const shelvedBooks = this.shelveBooks(books, emptyShelves);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <div className="open-search">
            <Link to="/search" style={{alignItems: "center"}}>
              <IconOpenSearch padding={"8px 0 0 0"} />
            </Link>
          </div>
          <h1>iReads</h1>
        </div>
        <div className="list-books-content">
          {shelvedBooks
            .map((shelf: IShelf) => (
              shelf.books && <Bookshelf
                key={shelf.key}
                name={shelf.name}
                books={shelf.books}
                update={update}
                shelves={emptyShelves}
              />
          ))}
        </div>
      </div>
    );
  }

  private shelveBooks(books: IBook[], shelves: IShelf[]): IShelf[] {
    books.forEach((book: IBook) => {
      const shelf: IShelf | undefined = (
        shelves.find((s: IShelf) => s.key === book.shelf) ||
        shelves.find((s: IShelf) => s.key === "none")
      );

      if (shelf && !shelf.books) {
        shelf.books = [];
      }

      if (shelf && shelf.books) {
        shelf.books.push(book);
      }
    });

    return shelves;
  }

  private filterBooks(books: IBook[], query: string): IBook[] {
    if (query) {
      const match = new RegExp(this.escapeRegExp(query), "i");
      books = books.filter((b: IBook) => match.test(b.title + b.authors));
    }
    return books;
  }

  private escapeRegExp = (str: string): string => {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }

}

export default Bookcase;
