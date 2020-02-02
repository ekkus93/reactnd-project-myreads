import React, { Component } from 'react'
import Book from './Book'
import '../App.css'

class BooksGrid extends Component {
    render() {
        const { books, handleBookChange } = this.props;
        let { shelf } = this.props;

        //console.log("###BooksGrid - books: ", books);
        //console.log("###BooksGrid - handleBookChange: ", handleBookChange);

        return (
            <ol className="books-grid">
                {books && books.map((book) => {
                    if (!shelf) {
                        shelf = book.shelf;
                    }

                    return (
                        <li key={book.id}>
                            <Book {...book} shelf={shelf} handleBookChange={handleBookChange}/>
                        </li>
                    );
                })
                }
            </ol>

        );
    }
}

export default BooksGrid;