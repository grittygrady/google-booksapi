import React from 'react'

const BookCard = (props) => {

  const { book } = props;
  console.log(book);

  let author;
  let title;
  let thumbnail;
  let linkUrl;
  let description;
  let price;

  if (book.volumeInfo) {
    author = book.volumeInfo.authors !== undefined ? `Author: ${book.volumeInfo.authors[0]}` : 'Author unknown';
    title = book.volumeInfo.title !== undefined ? book.volumeInfo.title : 'Title not found';
    thumbnail = book.volumeInfo.imageLinks.thumbnail !== undefined ? book.volumeInfo.imageLinks.thumbnail : "https://workboard.awign.com/no-image.jpg";
    linkUrl = book.volumeInfo.previewLink !== undefined ? book.volumeInfo.previewLink : "https://books.google.com/";
    description = book.volumeInfo.description !== undefined ? book.volumeInfo.description : 'No description found';
    price = book.saleInfo.saleability !== "NOT_FOR_SALE" ? `Price: $${book.saleInfo.listPrice.amount}` : null;
  } else {
    author = null;
    title = null;
    thumbnail = null;
    linkUrl = null;
    description = null;
    price = null;
  }

  return (
    <section style={{ width: '70%', margin: 'auto'}}>
      <ul>
        <li style={{ listStyle: 'none' }}>
          <img src={thumbnail} alt={title}/>
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <h2>{title}</h2>
          </a>
          <span><p>{price}</p><p>{author}</p></span>
          <p>{description}</p>
        </li>
      </ul>
    </section>
  )
}

export default BookCard;
