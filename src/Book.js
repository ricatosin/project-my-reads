import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookSelector from './BookSelector';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    moveBookToShelf: PropTypes.func.isRequired
  }

  render() {
    const {book, moveBookToShelf} = this.props
    var authors = (book.authors === undefined) ? [] : book.authors;
    const coverStyle = {
      width: 128,
      height: 193,
      backgroundImage: `url('${book.imageLinks.smallThumbnail}')`
    }
    return (
      <li key={book.id}>
        <div className='book'>
          <div className='book-top'>
            <a href={book.infoLink} target='_blank'><div className='book-cover' style={coverStyle}/></a>
            <BookSelector book={book} moveBookToShelf={moveBookToShelf}/>
          </div>
          <div className='book-title'>{book.title}</div>
          <div className='book-authors'>{`by ${authors.join(', ')}`}</div>
        </div>
      </li>
    )
  }
}

export default Book;
