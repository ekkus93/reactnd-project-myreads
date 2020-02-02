import React, { Component } from 'react'
import Book from './Book'
import '../App.css'

class BooksGrid extends Component {
    render() {
        const {books} = this.props;

        return (
            <ol className="books-grid">
                {books.map((book) => {
                    const key = (!book.id) ? book.title : book.id;
                    return (
                        <li key={key}>
                            <Book {...book} />
                        </li>
                    );
                })
                }
            </ol>
        );
    }
}

export default BooksGrid;