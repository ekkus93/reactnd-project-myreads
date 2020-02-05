import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { validShelves } from '../../constants'
import '../../App.css'

class BookshelfChanger extends Component {
  handleBookChangeInternal = (event) => {
    // const { id, currPage, handleBookChange , handleShelfChange } = this.props;
    const { id, handleBookChange } = this.props;
    const shelf = event.target.value;

    // only move if valid shelf
    if (validShelves.includes(shelf)) {
      handleBookChange(id, shelf);
    }
  }

  render() {
    let { shelf } = this.props;

    if (!validShelves.includes(shelf)) {
      shelf = "none";
    }

    return (
      <div className="book-shelf-changer">
        <select value={shelf} onChange={this.handleBookChangeInternal}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }

  /*
  render() {
    if (this.state.toListBooks) {
      return (
        <Redirect toListBooks={this.state.toListBooks} to='/' />
      );
    } else {
      let { shelf } = this.props;

      if (!validShelves.includes(shelf)) {
        shelf = "none";
      }

      return (
        <div className="book-shelf-changer">
          <select value={shelf} onChange={this.handleBookChangeInternal}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      );
    }
  }
  */
}

BookshelfChanger.propTypes = {
  id: PropTypes.string.isRequired,
  handleBookChange: PropTypes.func.isRequired,
}

export default BookshelfChanger;