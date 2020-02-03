import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from '../Book/'
import '../../App.css'

class BooksGrid extends Component {
  render() {
    const { books } = this.props;
    let { shelf } = this.props;

    return (
      <ol className="books-grid">
        {books && books.map((book) => {
          if (!shelf) {
            shelf = book.shelf;
          }

          return (
            <li key={book.id}>
              <Book
                {...book}
                shelf={shelf}
              />
            </li>
          );
        })
        }
      </ol>

    );
  }
}

BooksGrid.propTypes = {
  books: PropTypes.array,
  shelf: PropTypes.string,
}

export default BooksGrid;