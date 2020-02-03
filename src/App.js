import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import SearchPage from './components/SearchPage/'
import ListBooks from './components/ListBooks/'

class BooksApp extends React.Component {
  componentDidMount() {
    this.props.updateBookCollections();
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => <ListBooks />} />
        <Route path='/search' render={() => <SearchPage />} />
      </div>
    )
  }
}

export default BooksApp
