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

  handleSearchBooks = (event) => {
    const query = event.target.value;

    const updateSearchBooks = () => {
      BooksAPI.search(query).then(books => {
        this.setState((state, props) => {
          let updatedBooks = books;

          if (!updatedBooks || 'error' in updatedBooks) {
            // just clear out books if error
            updatedBooks = [];
          } else {
            // use internal state to update the shelves of the books from search results
            for (let i = 0; i < updatedBooks.length; i++) {
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

          console.log("###handleSearchBooks - query: ", this.state.query);
          console.log("###handleSearchBooks - updatedBooks: ", updatedBooks);

          return {
            searchBooks: updatedBooks,
          };
        });
      });
    }

    // Set query in state first then do the api call for the book search.
    // This will prevent lagging with typing in the search input.
    this.updateQuery(query, updateSearchBooks);
  }

  handleBookChange = (id, shelf, callback) => {
    const book = {
      id: id,
    };

    BooksAPI.update(book, shelf).then(() => this.updateBookCollections(callback));
  }

  clearSearch = (callback) => {
    this.setState({
      query: '',
      searchBooks: [],
    }, callback);
  }

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

  updateBookCollections = (callback=null) => {
    BooksAPI.getAll().then((allBooks) => {
      const bookCollection = {
        currentlyReading: allBooks.filter(book => book.shelf === 'currentlyReading'),
        wantToRead: allBooks.filter(book => book.shelf === 'wantToRead'),
        read: allBooks.filter(book => book.shelf === 'read'),
      };

      this.setState({
        bookCollection: bookCollection
      }, callback);
    });
  }

  setCurrPage = (currPage) => this.setState({ currPage })

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