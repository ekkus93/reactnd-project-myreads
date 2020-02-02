import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar'
import SearchBookResults from './SearchBooksResults'
import '../App.css'

class SearchPage extends Component {
  render() {
    const { searchStr, books, handleCloseSearchPage, handleSearchBooks, handleBookChange } = this.props;

    return (
      <div className="search-books">
        <SearchBooksBar
          searchStr={searchStr}
          handleCloseSearchPage={handleCloseSearchPage}
          handleSearchBooks={handleSearchBooks} />
        <SearchBookResults
          books={books}
          handleBookChange={handleBookChange}/>
      </div>
    );
  }
}

export default SearchPage;