import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import '../App.css'

class ListBooksContent extends Component {
    render() {
        const {bookCollection, handleBookChange} = this.props;
        console.log("###ListBooksContent - handleBookChange: ", handleBookChange);

        return (
            <div className="list-books-content">
                <div>
                    <Bookshelf title="Currently Reading" shelf="currentlyReading" books={bookCollection['currentlyReading']} handleBookChange={handleBookChange}/>
                    <Bookshelf title="Want to Read" shelf="wantToRead" books={bookCollection['wantToRead']} handleBookChange={handleBookChange}/>
                    <Bookshelf title="Read" shelf="read" books={bookCollection['read']} handleBookChange={handleBookChange}/>
                </div>
            </div>
        );
    }
}

export default ListBooksContent;