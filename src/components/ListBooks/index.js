import React from 'react'
import ListBooks from './ListBooks'
import { MyReadsContext } from '../../context/MyReadsContext'

export default (props) => (
  <MyReadsContext.Consumer>
    {({ bookCollection, handleBookChange, clearSearch, setCurrPage }) =>
      <ListBooks
        {...props}
        bookCollection={bookCollection}
        handleBookChange={handleBookChange}
        clearSearch={clearSearch}
        setCurrPage={setCurrPage}
      />
    }
  </MyReadsContext.Consumer>
);
