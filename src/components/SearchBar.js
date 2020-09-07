import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="searchbar">
        <form
          onSubmit={(submitEvent) => this.props.handleSearchSubmit(submitEvent, this.state.searchTerm)}
        >
          <label htmlFor="search">
            Search:  
          </label>
          <input 
            type="text" 
            name="search" 
            id="search"
            placeholder="Search for a subject"
            required
            onChange={(e) => this.handleChange(e)}
          />
          <input 
            type="submit" 
            value="Search"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;