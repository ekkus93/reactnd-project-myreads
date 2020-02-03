import React from 'react'
import { MyReadsContext } from '../../context/MyReadsContext'
import SearchBooksBar from './SearchBooksBar';
import '../../App.css'

export default (props) => (
  <MyReadsContext.Consumer>
    {({ query, handleSearchBooks }) =>
      <SearchBooksBar
        {...props}
        query={query}
        handleSearchBooks={handleSearchBooks}
      />
    }
  </MyReadsContext.Consumer>
);
