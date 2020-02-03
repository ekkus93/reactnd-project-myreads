import React from 'react'
import { MyReadsContext } from '../../context/MyReadsContext'
import BookshelfChanger from './BookshelfChanger';
import '../../App.css'

export default (props) => (
  <MyReadsContext.Consumer>
    {({ handleBookChange }) =>
      <BookshelfChanger
        {...props}
        handleBookChange={handleBookChange}
      />
    }
  </MyReadsContext.Consumer>
);
