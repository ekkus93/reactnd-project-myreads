import React, { Component } from 'react'
import BookshelfChanger from '../BookshelfChanger/'
import PropTypes from 'prop-types'
import '../../App.css'

class Book extends Component {
  render() {
    const { id, title, authors, shelf, imageLinks } = this.props;

    // deal with multiple authors
    const author = authors ? authors.join(", ") : "";

    const backgroundImage = (imageLinks && imageLinks.thumbnail) ? imageLinks.thumbnail : "";

    let backgroundImageVal = null;
    if (backgroundImage !== "") {
      backgroundImageVal = 'url("' + backgroundImage + '")';
    }

    const bookCoverStyle = {
      width: 128,
      height: 193,
      backgroundImage: backgroundImageVal,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center bottom',
    }

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={bookCoverStyle}></div>
          <BookshelfChanger
            id={id}
            shelf={shelf}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    );
  }
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  shelf: PropTypes.string,
  imageLinks: PropTypes.object,
};

export default Book;