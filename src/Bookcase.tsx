import * as React from "react";
import {Link} from "react-router-dom";
import Bookshelf from "./Bookshelf";
import IconOpenSearch from "./icons/IconOpenSearch";
import {IBookcaseProps, IShelf} from "./interfaces";

class Bookcase extends React.Component <IBookcaseProps> {
  public render() {
    let { books } = this.props;
    const { query, update } = this.props;
    const emptyShelves: IShelf[] = [
      { key: "currentlyReading", name: "Currently Reading" },
      { key: "wantToRead", name: "Want to Read" },
      { key: "read", name: "Read" },
      { key: "none", name: "None" },
    ];

    books = this.filterBooks(books, query);
    // books = books.sort("title");
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
            .map((shelf: any) => (
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

  private shelveBooks(books: any, shelves: any) {
    books.forEach((book: any) => {
      const shelf = shelves.find((s: any) => s.key === book.shelf) ||
                    shelves.find((s: any) => s.key === "none");

      if (shelf.books) {
        shelf.books = [];
      }

      shelf.books.push(book);
    });
    return shelves;
  }

  private filterBooks(books: any, query: any) {
    if (query) {
      const match = new RegExp(this.escapeRegExp(query), "i");
      books = books.filter((b: any) => match.test(b.title + b.authors));
    }
    return books;
  }

  private escapeRegExp = (str: string) => {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
}

export default Bookcase;
