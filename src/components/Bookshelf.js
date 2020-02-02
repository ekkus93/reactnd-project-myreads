import React, { Component } from 'react'
import BooksGrid from './BooksGrid'
import '../App.css'

class Bookshelf extends Component {
    render() {
        console.log("###Bookshelf1");
        const { title, books } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BooksGrid books={books}/>
                </div>
            </div>
        );
    }
}

export default Bookshelf;