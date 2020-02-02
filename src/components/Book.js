import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
import '../App.css'

class Book extends Component {
    render() {
        const { backgroundImage, width, height, title, author } = this.props;
        const backgroundImageVal = 'url("' + backgroundImage + '")';
        const bookCoverStyle = {
            width: width,
            height: height,
            backgroundImage: backgroundImageVal,
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={bookCoverStyle}></div>
                    <BookshelfChanger/>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        );
    }
}

export default Book;