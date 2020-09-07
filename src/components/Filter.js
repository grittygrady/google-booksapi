import React from 'react'

const Filter = (props) => {
  return (
    <div>
    <form action="" onChange={event => props.handlePrintType(event.target.value)} >
      <label htmlFor="printType">Print Type:</label>
        <select name="printType" id="printType">
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </form>
      <label htmlFor="bookType">Book Type:</label>
      <form action="" onChange={event => props.handleBookType(event.target.value)} >
        <select name="bookType" id="bookType">
          <option value=" ">All</option>
          <option value="ebooks">All eBooks</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="paid-ebooks">Paid eBooks</option>
        </select>
      </form>
    </div>
  )
}

export default Filter;
