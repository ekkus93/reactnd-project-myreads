import React from 'react'
import SearchPage from './SearchPage';
import { MyReadsContext } from '../../context/MyReadsContext'

export default (props) => (
  <MyReadsContext.Consumer>
    {({ searchBooks, setCurrPage, updateBookCollections }) =>
      <SearchPage
        {...props}
        books={searchBooks}
        setCurrPage={setCurrPage}
        updateBookCollections={updateBookCollections}
      />
    }
  </MyReadsContext.Consumer>
);
