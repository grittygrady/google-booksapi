import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Filter from './components/Filter';

class App extends Component {
  
  state = {
    searchResults: this.props.starterBooks,
    searchQuery: 'disney',
    typeFilter: '',
    printFilter: ''
  }


  handleSearchSubmit = (submitEvent, searchTerm) => {
    submitEvent.preventDefault();
    // console.log(submitEvent, searchTerm);
    
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar 
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <Filter />
        <BookList searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
