import React from 'react'
import Card from '../Card/Card'

export default function Home() {
  const divstyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
  };
  return (
<div style={divstyle}>
      <h2>Home Page</h2>
      <Card pageName="Home" description="This is the home page." color="#FF6663" />
    </div>  )
}
