import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
import '../App.css'

class Book extends Component {
    render() {
        console.log("###Book");
        const { title, authors } = this.props;
        const author = authors ? authors.join(", ") : "";
        const backgroundImage = this.props.imageLinks.thumbnail;
        const backgroundImageVal = 'url("' + backgroundImage + '")';
        const bookCoverStyle = {
            /*
            width: width,
            height: height,
            */
            width: 128,
            height: 193,
            backgroundImage: backgroundImageVal,
            'background-repeat': 'no-repeat',
            'background-position': 'center bottom',
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={bookCoverStyle}></div>
                    <BookshelfChanger />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        );
    }
}

export default Book;