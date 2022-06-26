import React from 'react';
import { Link, useLocation } from "react-router-dom";
import GenreTag from "../components/GenreTag"

export const Info = () => {
  const location = useLocation();
  // Dummy data:
  // const {image, home_port, mass_kgs, name } = location.state

  // API data:
  const {
    image, name, language, summary, genres
  } = location.state;

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>
          {name}
        </h1>
        <img src={image.medium} alt="movie poster" />
        <p>
          <strong>Language: </strong>
          {language}
        </p>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          {genres.map((genre) => {
            return <GenreTag genre={genre} />;
          })}
        </div>
        <span dangerouslySetInnerHTML={{ __html: summary }} style={{ textAlign: "justify" }} />
      </div>
      <Link to="/">LINK BACK HOME</Link>
    </div>
  );
};

export default Info;
