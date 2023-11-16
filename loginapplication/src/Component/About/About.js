import React from 'react';
import Card from '../Card/Card';

const AboutUs = () => {
  const divstyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
  };
  return (
    <div style={divstyle} >
      <h2>About Us</h2>
      <Card pageName="About Us" description="This is the About Us page" color="#FF6663" />

    </div>
  );
};

export default AboutUs;
