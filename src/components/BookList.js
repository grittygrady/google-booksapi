import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {

  const { searchResults } = props;
  const displayResults = searchResults.items.map((book, idx) => (
    <BookCard 
      book={ book }
      key={idx}
    />
  ))
  return (
    <section>
      <ul>
        {displayResults}
      </ul>
    </section>
  )
}

export default BookList;
