import React from 'react'
import { MyReadsContext } from '../../context/MyReadsContext'
import BooksGrid from './BooksGrid';
import '../../App.css'

export default (props) => (
  <MyReadsContext.Consumer>
    {({ handleBookChange }) =>
      <BooksGrid
        {...props}
        handleBookChange={handleBookChange}
      />
    }
  </MyReadsContext.Consumer>
);
