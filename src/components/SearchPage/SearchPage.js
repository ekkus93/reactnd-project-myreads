import React, { Component } from 'react'
import SearchBooksBar from '../SearchBooksBar/'
import SearchBookResults from '../SearchBooksResults/'
import '../../App.css'

class SearchPage extends Component {
  render() {
    const { books } = this.props;

    return (
      <div className="search-books">
        <SearchBooksBar />
        <SearchBookResults
          books={books}
        />
      </div>
    );
  }
}

export default SearchPage;