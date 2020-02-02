import React, { Component } from 'react'
import BooksGrid from './BooksGrid'
import '../App.css'

class SearchBookResults extends Component {
  render() {
    const { books, handleBookChange } = this.props;

    return (
      <div className="search-books-results">
        <BooksGrid
          books={books}
          handleBookChange={handleBookChange}
        />
      </div>
    );
  }
}

export default SearchBookResults;

