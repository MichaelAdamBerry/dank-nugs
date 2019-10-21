import React from "react";
import { CodeBlockJS } from "../CodeBlocks";

const Four = ({ figCaption }) => {
  const code = `//
  //Button.js in Next.js project

  import React, {useState} from 'react';
  
  const Button = () ⇒ {
    const [isClicked, toggleClicked] = useState(false)
    return (
        <>
            <button className={isClicked && "clicked"}>Click to Change Color</button>
            <style jsx>{\`
                button.clicked  {
                    background-color: "magenta";
                }\`
            <style>
        </>
    )  
  }
  
  export default Button;`;

  return <CodeBlockJS code={code} figCaption={figCaption} />;
};

export default Four;
