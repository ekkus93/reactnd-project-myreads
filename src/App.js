import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './components/SearchPage'
import ListBooks from './components/ListBooks'
import {validShelves} from './components/BookshelfChanger'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    searchStr: "",
    searchBooks: [],
    bookCollection: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    },
  }

  handleCloseSearchPage = () => this.setState({
    showSearchPage: false,
    searchStr: "",
    searchBooks: [],
  })

  handleAddBook = () => this.setState({ showSearchPage: true });

  getCurrentBookShelf = (id) => {
    const bookCollectionKeys = validShelves.filter(shelf => shelf !== 'none');

    for(let i=0; i<bookCollectionKeys.length; i++) {
      const key = bookCollectionKeys[i];
      const currBookCollection = this.state.bookCollection[key];

      const filteredBooks = currBookCollection.filter(book => book.id === id);
      if (filteredBooks !== null && filteredBooks.length > 0) {
        return key;
      }
    }

    return "none";
  }

  handleSearchBooks = (event) => {
    const searchStr = event.target.value;

    BooksAPI.search(searchStr).then(books => {
      this.setState((state, props) => {
        let updatedBooks = books;

        if (!updatedBooks || 'error' in updatedBooks) {
          // just clear out books if error
          updatedBooks = [];
        } else {
          // use internal state to update the shelves of the books from search results
          for(let i=0; i<updatedBooks.length; i++) {
            const id = updatedBooks[i].id;
            const shelf = this.getCurrentBookShelf(id);

            if (shelf !== books[i].shelf) {
              console.log("###handleSearchBooks - book: ", updatedBooks[i]);
              console.log("###handleSearchBooks - ", updatedBooks[i].title);
              console.log("###handleSearchBooks - shelf: ", shelf, updatedBooks[i].shelf);

              updatedBooks[i].shelf = shelf;
              updatedBooks[i].updatedByHandleSearchBooks = true;
            }
          }
        }

        console.log("###handleSearchBooks - updatedBooks: ", updatedBooks);

        return {
          searchStr: searchStr,
          searchBooks: updatedBooks,
        };
      });
    });
  }

  handleBookChange = (id, shelf) => {
    const book = {
      id: id,
    };

    BooksAPI.update(book, shelf).then(() => this.updateBookCollections(this.handleCloseSearchPage));
  }

  updateBookCollections = (callback=null) => {
    BooksAPI.getAll().then((allBooks) => {
      const bookCollection = {
        currentlyReading: allBooks.filter(book => book.shelf === 'currentlyReading'),
        wantToRead: allBooks.filter(book => book.shelf === 'wantToRead'),
        read: allBooks.filter(book => book.shelf === 'read'),
      };

      this.setState({bookCollection}, callback);
    });
  }

  componentDidMount() {
    this.updateBookCollections();
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage
            searchStr={this.state.searchStr}
            books={this.state.searchBooks}
            handleCloseSearchPage={this.handleCloseSearchPage}
            handleSearchBooks={this.handleSearchBooks}
            handleBookChange={this.handleBookChange}/>
        ) : (
          <ListBooks
            bookCollection={this.state.bookCollection}
            handleAddBook={this.handleAddBook}
            handleBookChange={this.handleBookChange}/>
          )}
      </div>
    )
  }
}

export default BooksApp
