import React from 'react';

const Greeting = (props) => {
  return (
    <h1>Hello World! {props.name}, Umur kamu {props.age}</h1>
  )
}

export default Greeting