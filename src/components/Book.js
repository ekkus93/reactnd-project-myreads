import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
import '../App.css'

class Book extends Component {
    handleBookChange = (event) => {
        const changeVal = event.target.value;

        if (changeVal !== 'move') {
            this.handleBookChange(this.props.id, changeVal);
        }
    }

    render() {
        const { id, title, authors, shelf, handleBookChange } = this.props;
        //console.log("###Book - handleBookChange: ", handleBookChange);
        const author = authors ? authors.join(", ") : "";
        const backgroundImage = (this.props.imageLinks && this.props.imageLinks.thumbnail) ? this.props.imageLinks.thumbnail : "";

        let backgroundImageVal = null;
        if (backgroundImage === "") {
            console.log("###Book: props: ", this.props);
            console.log("###Book - imageLinks: ", this.props.imageLinks);
        } else {
            backgroundImageVal = 'url("' + backgroundImage + '")';
        }

        const bookCoverStyle = {
            /*
            width: width,
            height: height,
            */
            width: 128,
            height: 193,
            backgroundImage: backgroundImageVal,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={bookCoverStyle}></div>
                    <BookshelfChanger
                        id={id}
                        shelf={shelf}
                        handleBookChange={handleBookChange} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        );
    }
}

export default Book;