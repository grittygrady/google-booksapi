import React from 'react'

const Filter = () => {
  return (
    <div>
    <form action="">
      <label htmlFor="printType">Print Type:</label>
        <select name="printType" id="printType">
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </form>
    </div>
  )
}

export default Filter;
