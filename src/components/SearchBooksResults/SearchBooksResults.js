import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

SearchBooksResults.propTypes = {
  books: PropTypes.array,
}

export default SearchBooksResults;

