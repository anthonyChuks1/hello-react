import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Button = (props) => {
  // your code here
  return <button className = "button" onClick={props.onClick}>{props.children}</button>
};

const Application = () => {
  const [name, setName] = useState('');
  // your code here

  const reset = () => {
    console.log("reset");
    setName('');
    // your code here
  };

  return (
    <main>
      {/* your code here -- this entire line including the curly braces can be removed */}
      <input placeholder = 'TYPE YOUR NAME' value = {name} onChange = {(e) => setName(e.target.value)}/>
      <Button onClick = {reset}>RESET</Button>
      
      <h1>{name ? `Hello ${name}` : ''}</h1>
      
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
