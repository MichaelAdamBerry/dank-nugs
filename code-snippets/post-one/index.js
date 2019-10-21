import React from "react";
import { CodeBlockJS, CodeBlockCSS } from "../CodeBlocks";

// (1) If you need to use backticks within the template string below,
// you must escapte them with a backslash like so: \` .
// (2) If you're using ${} to interpolate variables, you also must
// escape the dollar sign like so: \${varName}.
const escapedBackticksCodeString = `function sayHello(name) {
  return \`Hello \${ name }\`;
}`;

const EscapedBackticksCode = () => {
  return <CodeBlockJS code={escapedBackticksCodeString} />;
};

const styles = `/* index.css */
.clicked {
  background-color: magenta;
}
`;

const one = `//Button.js
//Button component with state
import React, {useState} from 'react';   
const Button = () ⇒ {
  const [isClicked, toggleClicked] = useState(false)
  return (
  <button className={isClicked && "clicked"}>{!isClicked ? "Click Me" : "I've Been Clicked"}</button>
  )  
}
  
export default Button;`;

const two = `import React from 'react';   
const Button = ({onClick, btnName}) ⇒ {
  return (
  <button onClick={onClick} className="my-button">{btnName}</button>
  )  
}
  
export default Button;`;

const three = `import React, {useState} from 'react';
import styled from "@emotion/styled";

const Button = () ⇒ {
  const [isClicked, toggleClicked] = useState(false)
  return (
  <button className="my-button">{!isClicked ? "Click Me" : "I've Been Clicked"}</button>
  )  
}

export const styled.button\`
  width: 10rem;
  height: 4rem;
  background-color: magenta;
\`

export default Button;`;

export const Demo_CSS = () => {
  return <CodeBlockCSS code={styles} />;
};

export const Demo_A = () => {
  return <CodeBlockJS code={one} />;
};

export const Demo_B = () => {
  return <CodeBlockJS code={two} />;
};

export const Demo_C = () => {
  return <CodeBlockJS code={three} />;
};

export const DemoCode = () => {
  return <CodeBlockJS code={one} />;
};
