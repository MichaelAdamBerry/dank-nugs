import React from "react";
import { CodeBlockJS } from "../CodeBlocks";

const code = `// StyledButton.js 
import styled from "@emotion/styled"  
const StyledButton = styled.button\`
  background-color: \${ props => props.clicked && 'magenta' };
\`
};
`;

const StyledButton = () => {
  return <CodeBlockJS code={code} />;
};

export default StyledButton;
