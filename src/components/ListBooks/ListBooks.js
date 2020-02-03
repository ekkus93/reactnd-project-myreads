import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListBooksContent from '../ListBooksContent/'
import { Link } from 'react-router-dom'
import '../../App.css'

class ListBooks extends Component {
  componentDidMount = () => {
    const { clearSearch, setCurrPage } = this.props;

    // if the user is coming from the search back to list books page, make sure that the search is cleared
    clearSearch(() => setCurrPage("ListBooks"));
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

ListBooks.propTypes = {
  setCurrPage: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
}

export default ListBooks;