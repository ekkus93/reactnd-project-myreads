import React, { Component } from 'react'
import BooksGrid from '../BooksGrid'
import '../../App.css'

class SearchBooksResults extends Component {
  render() {
    const { books } = this.props;

    return (
      <div className="search-books-results">
        <BooksGrid
          books={books}
        />
      </div>
    );
  }
}

export default SearchBooksResults;

