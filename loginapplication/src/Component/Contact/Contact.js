import React from 'react';
import Card from '../Card/Card';

const Contact = () => {
  const divstyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
  };
  return (
    <div style={divstyle}>
      <h2>Contact</h2>
      <Card pageName="Contact Card" description="This is the Contact page card content." color="#FF6663"/>
    </div>
  );
};

export default Contact;
