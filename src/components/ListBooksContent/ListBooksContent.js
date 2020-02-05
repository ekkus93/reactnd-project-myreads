import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from '../Bookshelf/'
import { visibleShelves, visibleShelveNameDict } from '../../constants'
import '../../App.css'

class ListBooksContent extends Component {
  render() {
    const { bookCollection } = this.props;

    const bookshelfElts = visibleShelves.map((shelf, i) => {
      const title = visibleShelveNameDict[shelf];
      const books = bookCollection[shelf];

      return (
        <div key={shelf}>
          <Bookshelf
            title={title}
            shelf={shelf}
            books={books}
          />
        </div>
      );
    });

    return (
      <div className="list-books-content">
        <div>
          {bookshelfElts}
        </div>
      </div>
    );
  }
}

ListBooksContent.propTypes = {
  bookCollection: PropTypes.object.isRequired,
}

export default ListBooksContent;