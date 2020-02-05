import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input';
import '../../App.css'

class SearchBooksBar extends Component {
  render() {
    const { query, handleSearchBooks } = this.props;

    return (
      <div className="search-books-bar">
        <Link
          to='/'
          className="close-search"
        >Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
            */}
          <DebounceInput
            type="text" placeholder="Search by title or author" value={query}
            minLength={2}
            debounceTimeout={300}
            onChange={handleSearchBooks} />
        </div>
      </div>
    );
  }
}

SearchBooksBar.propTypes = {
  query: PropTypes.string,
  handleSearchBooks: PropTypes.func.isRequired,
}

export default SearchBooksBar;