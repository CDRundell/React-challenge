import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import HomeInfo from '../components/HomeInfo';

// import Card from '../components/Card';
// import dummyData from "../dummyData.json"; // To be replaced with your api response data

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: [],
    };

    this.search("");
  }

  search = (query) => {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    fetch(url).then((response) => response.json()).then((data) => {
      this.setState({
        shows: data
      });
    });
  };

  render () {
    const { shows } = this.state;
    const { search } = this.search;
    return (
      <>
        <SearchBar searchFunction={search} />
        <HomeInfo information={shows} />
      </>
    );
  }
}

export default Home;
