import React from 'react';
import { Link, useLocation } from "react-router-dom";

export const Info = () => {
  const location = useLocation();
  // Dummy data:
  // const {image, home_port, mass_kgs, name } = location.state

  // API data:
  const {
    image, name, language, summary
  } = location.state;

  return (
    <div>
      <div>
        <h1>
          {name}
        </h1>
        <img src={image.medium} alt="movie poster" />
        <p>
          Language:
          {language}
        </p>
        <span dangerouslySetInnerHTML={{ __html: summary }} style={{ textAlign: "justify" }} />
      </div>
      <Link to="/">LINK BACK HOME</Link>
    </div>
  );
};

export default Info;
