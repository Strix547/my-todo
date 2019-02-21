import React, { Component } from 'react';

import './SearchPanel.scss';

export default class SearchPanel extends Component {
  state = {
    searchText: ''
  }
  onSearchChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
    this.props.onSearchChange(e.target.value);
  }
  render() {
    return (
      <input
        type="search"
        placeholder="type to search..."
        onChange={this.onSearchChange}
        value={this.state.searchText}
      />
    );
  }
}
