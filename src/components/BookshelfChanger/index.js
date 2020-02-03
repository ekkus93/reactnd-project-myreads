import React from 'react'
import { MyReadsContext } from '../../context/MyReadsContext'
import BookshelfChanger from './BookshelfChanger';
import '../../App.css'

export default (props) => (
  <MyReadsContext.Consumer>
    {({ currPage, handleBookChange }) =>
      <BookshelfChanger
        {...props}
        currPage={currPage}
        handleBookChange={handleBookChange}
      />
    }
  </MyReadsContext.Consumer>
);
