import React from 'react';
import Card from '../components/Card';
import dummyData from "../dummyData.json"; // To be replaced with your api response data
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <h1>Space X Ships</h1>
      <div className="App" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px"}}>
        <Link to="info/" underline="none"> <Card image={dummyData.image} name={dummyData.name} home_port={dummyData.home_port} roles={dummyData.roles} />
          {/* <Card image={dummyData.image} name={dummyData.name} home_port={dummyData.home_port} roles={dummyData.roles} /> */}
        </Link>
      </div>
    </>
  );
};

export default Home;
