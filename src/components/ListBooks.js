import React, { Component } from 'react'
import ListBooksContent from './ListBooksContent'
import '../App.css'

class ListBooks extends Component {
    render() {
        const {bookCollection} = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <ListBooksContent bookCollection={bookCollection}/>
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
        );
    }
}

export default ListBooks;