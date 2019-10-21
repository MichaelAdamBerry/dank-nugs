import React from "react";
import Definitions from "../../components/Definitions";
const Def = () => {
  const items = [
    {
      dt: "Colocation",
      dd:
        "Organizing code that shares behavior and state as close as reasonably possible."
    },
    {
      dt: "JS in CSS",
      dd:
        "A technique of writing CSS in within javascript instead of linking to an external stylesheet."
    }
  ];
  return <Definitions heading={"Glossary of Technial Terms"} items={items} />;
};

export default Def;
