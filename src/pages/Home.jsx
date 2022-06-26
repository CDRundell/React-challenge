import React from 'react';
import Card from '../components/Card';
import dummyData from "../dummyData.json"; // To be replaced with your api response data
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <h1>Space X Ships</h1>
      <div className="App" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px"}}>
        { dummyData.map(dummyDatum => {
          return <Link to="info/" underline="none" state={dummyDatum}><Card image={dummyDatum.image} name={dummyDatum.name} home_port={dummyDatum.home_port} roles={dummyDatum.roles} /></Link>
        })
        }
      </div>
    </>
  );
};

export default Home;
