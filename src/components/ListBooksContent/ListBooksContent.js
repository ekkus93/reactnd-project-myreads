import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from '../Bookshelf/'
import '../../App.css'

class ListBooksContent extends Component {
  render() {
    const { bookCollection } = this.props;

    return (
      <div className="list-books-content">
        <div>
          <Bookshelf
            title="Currently Reading"
            shelf="currentlyReading"
            books={bookCollection['currentlyReading']}
          />
          <Bookshelf
            title="Want to Read"
            shelf="wantToRead"
            books={bookCollection['wantToRead']}
          />
          <Bookshelf
            title="Read"
            shelf="read"
            books={bookCollection['read']}
          />
        </div>
      </div>
    );
  }
}

ListBooksContent.propTypes =  {
  bookCollection: PropTypes.object.isRequired,
}

export default ListBooksContent;