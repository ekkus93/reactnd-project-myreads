import React, { Component } from 'react'
import Book from './Book'
import '../App.css'

class Bookshelf extends Component {
    render() {
        console.log("###Bookshelf");
        const { title, books } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { books.map( book => (<Book {...book}/>) ) }
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;