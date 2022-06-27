import React from 'react';
import { useLocation } from "react-router-dom";
import GenreTag from "../components/GenreTag";

export const Info = () => {
  const location = useLocation();
  // Dummy data:
  // const {image, home_port, mass_kgs, name } = location.state

  // API data:
  const {
    image, name, language, summary, genres
  } = location.state;
  const url = "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=328&q=80";

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        {name}
      </h1>
      <img src={image ? image.medium : url} alt="movie poster" />
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
  );
};

export default Info;
