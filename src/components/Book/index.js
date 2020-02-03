import React from 'react'
import { MyReadsContext } from '../../context/MyReadsContext'
import Book from './Book';
import '../../App.css'

export default (props) => (
  <MyReadsContext.Consumer>
    {({ handleBookChange }) =>
      <Book
        {...props}
        handleBookChange={handleBookChange}
      />
    }
  </MyReadsContext.Consumer>
);
