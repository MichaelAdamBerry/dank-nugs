import React from "react";
import { CodeBlockJS } from "../CodeBlocks";

const Parent = () => {
  const code = `// Parent.js 
  import React, {useState} from 'react'; 
  import Button from "./Button.js";
  
  const Parent = () ⇒ {
    const [isClicked, toggleClick] = useState(false);
    return (
    <Button onClick={toggleClick} isClicked={isClicked} />
    )  
  }
    
  export default Button;`;

  return <CodeBlockJS code={code} />;
};

export default Parent;
