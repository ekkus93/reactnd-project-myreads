import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './components/SearchPage'
import ListBooks from './components/ListBooks'

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

  handleSearchBooks = (event) => {
    const searchStr = event.target.value;

    BooksAPI.search(searchStr).then(books => {
      if (!books || 'error' in books) {
        // just clear out books if error
        books = [];
      }

      this.setState({
        searchStr: searchStr,
        searchBooks: books,
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
