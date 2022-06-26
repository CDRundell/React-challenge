import React from 'react';
import { Link, useLocation } from 'react-router-dom'

export const Info = () => {
  let location = useLocation()
  const {image, home_port, mass_kgs, name } = location.state
  return (
    <div>
      <div>
        <h1> {name} </h1>
        <p> Location: {home_port}</p>
      </div>
      <Link to="/">LINK BACK HOME</Link>
    </div>
  )
}

export default Info;
