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
    printFilter: '',
    error: null
  }


  handleSearchSubmit = (submitEvent, searchTerm) => {
    submitEvent.preventDefault();
    // console.log(submitEvent, searchTerm);
    this.setState({
      searchQuery: searchTerm
    });

    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    const key = 'AIzaSyCs1BdqDTlfY9ZZxrnnWdX7nU6dwuNZ13A';
    const formattedSearchUrl = this.formatQuery(baseUrl, searchTerm, key);
    fetch(formattedSearchUrl)
      .then(response => {
        if(!response.ok) {
          throw new Error('An error occurred with the network, please try again.');
        } 
        return response;
      })
      .then(response => response.json())
      .then(bookResults => {
        console.log('Response successful', bookResults)
        this.setState({
          searchResults: bookResults,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        })
      })
  }

  formatQuery = (baseUrl, searchTerm, key) => {
    // ADD FILTER OPTIONS HERE!!!!!
    let formattedQuery;
    if(this.state.searchQuery !== '') {
      formattedQuery = '?q=' + searchTerm
    }
    const formattedUrl = baseUrl + formattedQuery + '&key' + key;
    console.log('Formatted URL:', formattedUrl);
    return formattedUrl;
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
