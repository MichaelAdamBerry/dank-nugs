import React from "react";
import { CodeBlockJS } from "../CodeBlocks";

const Three = ({ figCaption }) => {
  const code = `//Button.js
import React, {useState} from 'react';
import StyledButton from "./StyledButton";
  
  const Button = () ⇒ {
    const [isClicked, toggleClicked] = useState(false)
    return <StyledButton isClicked={isClicked} />
  }
  
  export default Button;`;

  return <CodeBlockJS figCaption={figCaption} code={code} />;
};

export default Three;
