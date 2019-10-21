import React from "react";
import Definitions from "../../components/Definitions";
const Def = () => {
  const items = [
    {
      dt: "Execution Context",
      dd: "The variable environment in which a function executes within"
    },
    {
      dt: "Functional Scope",
      dd:
        "In Javascript, each function creates a new scope which may contain nested functions with their own scope.  Scope determines the accessibility (visibility) of variables. Variables defined inside a function are not accessible (visible) from outside the function"
    },
    {
      dt: "Global Scope",
      dd:
        "Variables defined outside of a function are in the outer most, i.e. global, scope. They are accessible to all subsequent inner functional scopes"
    }
  ];
  return <Definitions heading={"Glossary of Technial Terms"} items={items} />;
};

export default Def;
