import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { MyReadsProvider, MyReadsContext } from './context/MyReadsContext'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <MyReadsProvider>
      <MyReadsContext.Consumer>
        {({ query, searchBooks, bookCollection, handleSearchBooks, handleBookChange, clearSearch, updateBookCollections }) =>
            <App
              query={query}
              searchBooks={searchBooks}
              bookCollection={bookCollection}
              handleSearchBooks={handleSearchBooks}
              handleBookChange={handleBookChange}
              clearSearch={clearSearch}
              updateBookCollections={updateBookCollections}
            />
        }
      </MyReadsContext.Consumer>
    </MyReadsProvider>
  </BrowserRouter>,
  document.getElementById('root'))
