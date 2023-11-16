import React from 'react';

const Card = ({ pageName, description, color }) => {
  const cardStyle = {
    height: 200,
    width: 150,
    padding: 10,
    margin: 10,
    backgroundColor: color,
    WebkitFilter: 'drop-shadow(0px 0px 5px #666)',
    filter: 'drop-shadow(0px 0px 5px #666)',
    alignItems: 'center', 
    justifyContent: 'center', 

  };

  return (
    <div style={cardStyle}>
      <h3>{pageName}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
