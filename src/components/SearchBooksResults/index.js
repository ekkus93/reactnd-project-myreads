import React from 'react'
import { MyReadsContext } from '../../context/MyReadsContext'
import SearchBooksResults from './SearchBooksResults';
import '../../App.css'

export default (props) => (
  <MyReadsContext.Consumer>
    {({ handleBookChange }) =>
      <SearchBooksResults
        {...props}
        handleBookChange={handleBookChange}
      />
    }
  </MyReadsContext.Consumer>
);
