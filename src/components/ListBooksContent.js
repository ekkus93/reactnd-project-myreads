import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import '../App.css'

class ListBooksContent extends Component {
    render() {
        const {bookCollection} = this.props;

        return (
            <div className="list-books-content">
                <div>
                    <Bookshelf title="Currently Reading" books={bookCollection['currentlyReading']}/>
                    <Bookshelf title="Want to Read" books={bookCollection['wantToRead']}/>
                    <Bookshelf title="Read" books={bookCollection['read']}/>
                </div>
            </div>
        );
    }
}

export default ListBooksContent;