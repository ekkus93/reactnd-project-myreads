import React from 'react'
import { MyReadsContext } from '../../context/MyReadsContext'
import Bookshelf from './Bookshelf';
import '../../App.css'

export default (props) => (
  <MyReadsContext.Consumer>
    {({ handleBookChange }) =>
      <Bookshelf
        {...props}
        handleBookChange={handleBookChange}
      />
    }
  </MyReadsContext.Consumer>
);
