import React from 'react'
import ListBooksContent from './ListBooksContent'
import { MyReadsContext } from '../../context/MyReadsContext'

export default (props) => (
  <MyReadsContext.Consumer>
    {({ bookCollection, handleBookChange}) =>
      <ListBooksContent
        {...props}
        bookCollection={bookCollection}
        handleBookChange={handleBookChange}
      />
    }
  </MyReadsContext.Consumer>
);
