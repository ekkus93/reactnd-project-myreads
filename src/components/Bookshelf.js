import React, { Component } from 'react'
import BooksGrid from './BooksGrid'
import '../App.css'

class Bookshelf extends Component {
  render() {
    //console.log("###Bookshelf");
    const { title, books, shelf, handleBookChange } = this.props;
    //console.log("###Bookshelf - handleBookChange: ", handleBookChange);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksGrid
            books={books}
            shelf={shelf}
            handleBookChange={handleBookChange}
          />
        </div>
      </div>
    );
  }
}

export default Bookshelf;