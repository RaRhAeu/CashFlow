import React, { Component } from 'react';
// import { FaSearch } from 'react-icons/fa';

class SearchItem extends Component {
  render() {
    return(
      <div className="nav-search">
        <input
          type="text"
          className="search-in"
          placeholder="  Search for event"/>
      </div>
    )
  }
}

export default SearchItem;
