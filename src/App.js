import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  listBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({books});
    })
  }

  moveBookToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(data => {
      this.setState(status => ({
        books: status.books.map(b => {
          if (book.id === b.id) {
            b.shelf = shelf;
          }
          return b;
        })
      }));
    });
  }

  render() {
    const {books} = this.state;
    return (
      <div className='app'>
        <Route exact path='/search' render={() => (<SearchBooks moveBookToShelf={this.moveBookToShelf} books={books}/>)}/>
        <Route exact path='/' render={() => (<ListBooks books={books} moveBookToShelf={this.moveBookToShelf} listBooks={this.listBooks}/>)}/>
      </div>
    )
  }
}

export default BooksApp;
