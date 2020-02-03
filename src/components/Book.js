import React, { Component } from 'react'
import { BookshelfChanger } from './BookshelfChanger'
import '../App.css'

class Book extends Component {
  render() {
    const { id, title, authors, shelf, handleBookChange } = this.props;

    // deal with multiple authors
    const author = authors ? authors.join(", ") : "";

    const backgroundImage = (this.props.imageLinks && this.props.imageLinks.thumbnail) ? this.props.imageLinks.thumbnail : "";

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
            handleBookChange={handleBookChange}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    );
  }
}

export default Book;