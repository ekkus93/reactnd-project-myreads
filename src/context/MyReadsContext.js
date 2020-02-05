import React, { createContext, Component } from "react"
import * as BooksAPI from '../BooksAPI'
import validShelves from '../constants'

export const MyReadsContext = createContext();

export class MyReadsProvider extends Component {
  state = {
    query: '',
    searchBooks: [],
    bookCollection: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    },
    currPage: "ListBooks",
  }

  updateQuery = (query, callback) => {
    this.setState({query}, callback);
  }

  getCurrentBookShelf = (bookCollection, id) => {
    const bookCollectionKeys = validShelves.filter(shelf => shelf !== 'none');

    for(let i=0; i<bookCollectionKeys.length; i++) {
      const key = bookCollectionKeys[i];
      const currBookCollection = bookCollection[key];

      const filteredBooks = currBookCollection.filter(book => book.id === id);
      if (filteredBooks !== null && filteredBooks.length > 0) {
        return key;
      }
    }

    return "none";
  }

  getUpdatedSearchBookShelves = (bookCollection, searchBooks) => {
    if (searchBooks) {
      if ("error" in searchBooks) {
        return [];
      }
      return searchBooks.map(searchBook => {
        searchBook.shelf = this.getCurrentBookShelf(bookCollection, searchBook.id)
        return searchBook;
      });
    } else {
      return searchBooks;
    }
  }

  handleSearchBooks = (event) => {
    const query = event.target.value;

    const updateSearchBooks = () => {
      BooksAPI.search(query).then(books => {
        this.setState((state, props) => {
          const newSearchBooks = {
            searchBooks: this.getUpdatedSearchBookShelves(state.bookCollection, books)
          };

          return newSearchBooks;
        });
      });
    }

    // Set query in state first then do the api call for the book search.
    // This will prevent lagging with typing in the search input.
    this.updateQuery(query, updateSearchBooks);
  }

  handleBookChange = (id, shelf) => {
    const book = {
      id: id,
    };

    BooksAPI.update(book, shelf).then(this.updateBookCollections);
  }

  clearSearch = (callback) => {
    this.setState({
      query: '',
      searchBooks: [],
    }, callback);
  }

  updateBookCollections = () => {
    BooksAPI.getAll().then((allBooks) => {
      this.setState((state, props) => {
        const bookCollection = {
          currentlyReading: allBooks.filter(book => book.shelf === 'currentlyReading'),
          wantToRead: allBooks.filter(book => book.shelf === 'wantToRead'),
          read: allBooks.filter(book => book.shelf === 'read'),
        };
        const searchBooks = this.getUpdatedSearchBookShelves(bookCollection, state.searchBooks);

        return {
          bookCollection: bookCollection,
          searchBooks: searchBooks,
        };
      });
    });
  }

  setCurrPage = (currPage, callback=null) => this.setState({ currPage }, callback)

  render() {
    return (
      <MyReadsContext.Provider
        value={{
          ...this.state,
          updateQuery: this.updateQuery,
          handleSearchBooks: this.handleSearchBooks,
          handleBookChange: this.handleBookChange,
          clearSearch: this.clearSearch,
          getCurrentBookShelf: this.getCurrentBookShelf,
          updateBookCollections: this.updateBookCollections,
          setCurrPage: this.setCurrPage,
        }}
      >
        {this.props.children}
      </MyReadsContext.Provider>
    );
  }
}