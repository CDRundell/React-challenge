import React, { Component }  from 'react'

class SearchBar extends Component {

  constructor (props) {
    super(props)

    this.state = {
      query: ""
    }
  }

  handleUpdate = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.props.searchFunction(event.target.value)
    }
  }

  render () {
    return (
      <div style={{display:"flex", justifyContent: "center", margin:"8px"}}>
        <p>Please enter a TV show to search for:</p>
        <input type="text" style={{ width: "30%", marginLeft: "8px"  }}
              onChange={this.handleUpdate}
              onKeyDown={this.handleKeyDown}
              />
      </div>
    );
  }
}

export default SearchBar
