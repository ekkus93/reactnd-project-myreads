import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from '../BooksGrid/'
import '../../App.css'

class Bookshelf extends Component {
  render() {
    const { shelf, title, books } = this.props;

    return (
      <div key={shelf} className="bookshelf" >
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksGrid
            books={books}
          />
        </div>
      </div>
    );
  }
}

Bookshelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  books: PropTypes.array,
}

export default Bookshelf;