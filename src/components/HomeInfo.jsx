import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

// imports for dummydata:
// import dummyData from "../dummyData.json"; // To be replaced with your api response data

class HomeInfo extends Component {
  render () {
    const { information } = this.props;
    return (
      <div>
        {/* Iterating over API data */}
        <div
          className="App"
          style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px"
          }}
        >
          {information.map((info) => {
            const cardInfo = { ...info.show };
            let url = "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            if (cardInfo.image) {
              url = cardInfo.image.medium;
            }
            return (
              <Link to="info/" underline="none" state={info.show} key={cardInfo.id}>
                <Card name={cardInfo.name} image={url} key={cardInfo.id} />
              </Link>
            );
          })}
          {/* Iterating over dummmy data: */}
          {/* {dummyData.map(dummyDatum => {
            return <Link to="info/"
            underline="none" state={dummyDatum}>
            <Card image={dummyDatum.image}
            name={dummyDatum.name} =
            home_port={dummyDatum.home_port} roles={dummyDatum.roles} />
            </Link>
          })
          } */}
        </div>
      </div>
    );
  }
}

export default HomeInfo;
