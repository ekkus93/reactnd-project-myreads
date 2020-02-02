import React, { Component } from 'react'
import Book from './Book'
import '../App.css'

class Bookshelf extends Component {
    render() {
        console.log("###Bookshelf1");
        const { title, books } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { books.map( (book) => {
                            const key = (!book.id) ? book.title : book.id;
                            return (
                                <li key={key}>
                                    <Book {...book}/>
                                </li>
                                );
                            })
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;