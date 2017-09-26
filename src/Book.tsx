import * as React from "react";
import BookshelfChanger from "./BookshelfChanger";

import {IBook, IBookProps} from "./interfaces";

class Book extends React.Component <IBookProps> {
  public render() {
    const { book, update, shelves } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={this.styleCover(book)}></div>
            <BookshelfChanger
              book={book}
              update={update}
              shelves={shelves}
            />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(" & ")}</div>
      </div>
    );
  }

  private styleCover = (book: IBook) => {
    return {
      width: 128,
      height: 193,
      backgroundImage: `url("${book.imageLinks.thumbnail}")`,
    };
  }

}

export default Book;
