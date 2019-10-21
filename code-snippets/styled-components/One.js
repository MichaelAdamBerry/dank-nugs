import React from "react";
import { CodeBlockJS } from "../CodeBlocks";

const One = ({ figCaption }) => {
  const code = `//Button.js
  import React, {useState} from 'react';   
  const Button = () ⇒ {
  const [isClicked, toggleClicked] = useState(false)
  return (
  <button className={isClicked && "clicked"}>{!isClicked ? "Click Me" : "I've Been Clicked"}</button>
  )  
}
export default Button;`;

  return <CodeBlockJS code={code} figCaption={figCaption} />;
};

export default One;
