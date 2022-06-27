import React, { Component } from 'react';

class GenreTag extends Component {
  render () {
    const { genre } = this.props;
    return (
      <p style={{ padding: "8px 8px", backgroundColor: "peachpuff", borderRadius: "8px" }}>{genre}</p>
    );
  }
}
export default GenreTag;
