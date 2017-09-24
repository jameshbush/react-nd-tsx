import * as React from "react";
import {Link} from "react-router-dom";
import IconArrowBack from "./icons/IconArrowBack";
import {ISearchBooksProps} from "./interfaces";

class SearchBooks extends React.Component <ISearchBooksProps> {
  public render() {
    const {query, updateQuery} = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            onClick={((e) => updateQuery(""))}
          >
            <IconArrowBack padding=""/>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
              placeholer="Search by title or author" TODO replace, was throwing error
            */}
            <input
              type="text"
              value={query}
              onChange={(e) => updateQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
