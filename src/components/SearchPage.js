import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar'
import SearchBookResults from './SearchBooksResults'
import '../App.css'

class SearchPage extends Component {
  render() {
    const { query, books, handleSearchBooks, handleBookChange } = this.props;

    return (
      <div className="search-books">
        <SearchBooksBar
          query={query}
          handleSearchBooks={handleSearchBooks}
        />
        <SearchBookResults
          books={books}
          handleBookChange={handleBookChange}
        />
      </div>
    );
  }
}

export default SearchPage;