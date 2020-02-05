import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from '../Book/'
import '../../App.css'

class BooksGrid extends Component {
  render() {
    let { books } = this.props;

    if (books === undefined) {
      return (null);
    }

    const bookElts = books.map(book => {
      return (
        <li key={book.id}>
          <Book
            {...book}
            shelf={book.shelf}
          />
        </li>
      );
    });

    return (
      <ol className="books-grid">
        {bookElts}
      </ol>
    );
  }
}

BooksGrid.propTypes = {
  books: PropTypes.array,
}

export default BooksGrid;