import React, { Component } from 'react';
import { Button } from 'antd';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.setState({
      query: event.target.value
    });
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const { searchFunction } = this.props;
      searchFunction(event.target.value);
    }
  };

  handleSubmitButton = () => {
    const { query } = this.state;
    const { searchFunction } = this.props;
    searchFunction(query);
  };

  render () {
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: "8px" }}>
        <p>Please enter a TV show to search for:</p>
        <input
          type="text"
          style={{ width: "30%", marginLeft: "8px" }}
          onChange={this.handleUpdate}
          onKeyDown={this.handleKeyDown}
        />
        <Button type="primary" onClick={this.handleSubmitButton} style={{ marginLeft: "4px" }}> Submit </Button>
      </div>
    );
  }
}

export default SearchBar;
