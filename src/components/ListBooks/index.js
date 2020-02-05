import React from 'react'
import ListBooks from './ListBooks'
import { MyReadsContext } from '../../context/MyReadsContext'

export default (props) => (
  <MyReadsContext.Consumer>
    {({ clearSearch, setCurrPage, updateBookCollections }) =>
      <ListBooks
        {...props}
        clearSearch={clearSearch}
        setCurrPage={setCurrPage}
        updateBookCollections={updateBookCollections}
      />
    }
  </MyReadsContext.Consumer>
);
