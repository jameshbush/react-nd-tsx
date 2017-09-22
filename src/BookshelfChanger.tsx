import * as React from "react";
import IconArrowDropDown from "./icons/IconArrowDropDown";
import {IBookshelfChangerProps} from "./interfaces";

class BookshelfChanger extends React.Component <IBookshelfChangerProps> {
  public render() {
    const { shelves, book } = this.props;

    return (
      <div className="book-shelf-changer">
        <form>
          <select onChange={this.handleChange} defaultValue={book.shelf || "none"}>
            <option value="instructions" disabled>Move to...</option>
            {shelves.map((shelf: any) =>
              <option
                key={shelf.key}
                value={shelf.key}
              >
                {shelf.name}
              </option>,
            )}
          </select>
        </form>
      </div>
    );
  }

  private handleChange = (event: any) => {
    event.preventDefault();
    this.props.update(this.props.book, event.target.value);
  }

}

export default BookshelfChanger;
