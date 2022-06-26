import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// imports for dummydata:
// import dummyData from "../dummyData.json"; // To be replaced with your api response data
import Card from '../components/Card';

class HomeInfo extends Component {
  render () {
    return (
      <div>
        <div className="App" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px" }}>
          {this.props.information.map(info => {
            return <Link to="info/" underline="none" state={info.show}><Card name={info.show.name} image={info.show.image.medium} key={info.show.id}/></Link>
          })}
          {/* {dummyData.map(dummyDatum => {
            return <Link to="info/" underline="none" state={dummyDatum}><Card image={dummyDatum.image} name={dummyDatum.name} home_port={dummyDatum.home_port} roles={dummyDatum.roles} /></Link>
          })
          } */}
        </div>
      </div>
    )
  }
}

export default HomeInfo
