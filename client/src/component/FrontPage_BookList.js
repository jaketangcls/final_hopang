import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard'; 
import './styles.css'; 


function BookList() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      axios
        .get('http://localhost:3001/api.books')
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log('Error from BookList');
        });
    }, []);
  
    const bookList =
      books.length === 0
        ? 'there is no book record!'
        : books.map((book, k) => <BookCard book={book} key={k} />);
  
    return (
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
            </div>
  
            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
  
          <div className='list'>{bookList}</div>
        </div>
      </div>
    );
  }

  export default BookList;