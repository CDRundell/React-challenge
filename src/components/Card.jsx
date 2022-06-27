import React from "react";

/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 *
 * @param props
 * @returns
 *
 */
const Card = (props) => {
  // dummy info values:
  // const {image, name, home_port, roles} = props;

  // API info values:
  const { name, image } = props;
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "15px", color: "#333", border: "solid 1px #333", borderRadius: "5px"
    }}
    >
      <div style={{
        width: "90%", height: "400px", backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"
      }}
      />
      <h1>{name}</h1>
    </div>
  );
};

export default Card;
