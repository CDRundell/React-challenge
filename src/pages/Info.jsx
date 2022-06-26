import React from 'react';

export const Info = () => {
  let location = useLocation()
  // Dummy data:
  // const {image, home_port, mass_kgs, name } = location.state

  // API data:
  const { image, name, language, summary } = location.state;

  return (
    <div>
      <div>
        <h1> {name} </h1>
        <p> Language: {language}</p>
        <span dangerouslySetInnerHTML={{ __html: summary }} style={{textAlign: "justify"}}  />
      </div>
      <Link to="/">LINK BACK HOME</Link>
    </div>
  )
}

export default Info;
