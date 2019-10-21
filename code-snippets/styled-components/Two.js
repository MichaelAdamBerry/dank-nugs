import React from "react";
import { CodeBlockJS } from "../CodeBlocks";

const Two = ({ figCaption }) => {
  const code = `// Button.js 
  import React from 'react';   
  const Button = ({onClick, isClicked}) ⇒ {
    return (
    <button onClick={onClick} className={isClicked && "clicked"}</button>
    )  
  }
    
  export default Button;`;

  return <CodeBlockJS figCaption={figCaption} code={code} />;
};

export default Two;
