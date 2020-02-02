import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../App.css'

const validShelves = ["wantToRead", "currentlyReading", "read", "none"];

class BookshelfChanger extends Component {
  state = {
    toListBooks: false,
  }

  setToListBookstToTrue = () => {
    this.setState({
      toListBooks: true,
    }, );
  }

  handleBookChangeInternal = (event) => {
    const { handleBookChange } = this.props;
    const shelf = event.target.value;

    if (validShelves.includes(shelf)) {
      // ignore "move"
      handleBookChange(this.props.id, shelf, this.setToListBookstToTrue);
    }
  }

  render() {
    //console.log("###BookshelfChanger - this: ", this);
    //console.log("###BookshelfChanger - props: ", this.props);

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
}

export { BookshelfChanger, validShelves };