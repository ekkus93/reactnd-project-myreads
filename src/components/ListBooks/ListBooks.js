import React, { Component } from 'react'
import ListBooksContent from '../ListBooksContent/'
import { Link } from 'react-router-dom'
import '../../App.css'

class ListBooks extends Component {
  componentDidMount = () => {
    // if the user is coming from the search back to list books page, make sure that the search is cleared
    this.props.clearSearch();
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <ListBooksContent />
        <div className="open-search">
          <Link
            to='/search'
            className='open-search'
            >Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;