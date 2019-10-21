import React from "react";
import { CodeBlockCSS } from "../CodeBlocks";

const styles = `/* index.css */
.clicked {
  background-color: magenta;
}`;

const StyleBlock = () => {
  return <CodeBlockCSS code={styles} />;
};

export default StyleBlock;
