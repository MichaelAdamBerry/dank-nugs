import React from "react";
import { CodeBlockJS } from "../CodeBlocks.js";

export const FunctionalScope = () => {
  const code = `//Functional scope
  function allWords() {
    const word = "anthropology";
  
    function getWords() {
      const arr = ["amber", "arson", "ache"];
      return arr;
    }
  
    try {
      //arr is not in scope
      console.log(arr);
    } catch (e) {
      console.log("this is an error my dude. arr doesnt exist out here");
    }
    const words = getWords();
  
    return words.push(word);
  }
  
  allWords();
  
  // console logs  an error message
  // returns ["amber", "arson", "ache", "anthropology"]
  `;
  return <CodeBlockJS code={code} />;
};

export const ImplicitBinding = () => {
  const code = `//Implicit binding
    let doggo_A, doggo_B;
    
    doggo_A = {
      name: "Bones",
      age: 2,
      color: "white",
    
      favQuote:
        "i may have gotten bigger. but my desire to be held. has remained constant",
      barkQuote: function() {
        console.log(this.favQuote);
      }
    };
    
    doggo_B = {
      name: "Red",
      age: 3,
      color: "Red",
    
      favQuote:
        "sometimes. i will go outside. only to realize. it is inside that i desired all along",
      barkQuote: function() {
        console.log(this.favQuote);
      }
    };
    
    doggo_B.barkQuote();
    /* output --> "sometimes. i will go outside. only to 
    realize. it is inside that i desired all along " */
    
    doggo_A.barkQuote();
    /* output --> "i may have gotten bigger. but my desire 
    to be held. has remained constant" */
    
    function getDoggoQuote(doggo) {
      doggo.barkQuote();
    }
    //Below each getDoggoQuote() will return different values when passed different objects
    
    getDoggoQuote(doggo_A);
    /* output --> "i may have gotten bigger. but my desire 
    to be held. has remained constant" */
    
    getDoggoQuote(doggo_B);
    /* output --> "i may have gotten bigger. but my desire 
    to be held. has remained constant" */
    `;
  return <CodeBlockJS code={code} />;
};

export const ImplicitBindingTwo = () => {
  const code = `
    doggo_B.sibling = doggo_A;

    doggo_A.sibling = doggo_B;
    
    doggo_B.sibling.barkQuote();
    
    /* output --> the value of from the sibling object 
        "i may have gotten bigger. but my desire 
         to be held. has remained constant"
    */`;

  return <CodeBlockJS code={code} />;
};

export const DotCall = () => {
  const code = `/* Explicit binding to set the execution context with .call() */
    const barkName = function() {
      console.log(this.name);
    };
    
    barkName.call(doggo_A);`;
  return <CodeBlockJS code={code} />;
};

export const DotApply = () => {
  const code = `// The .apply() method allows us to pass in an array
    const barkNames = function(dogA, dogB) {
      console.log(
        "my name is ",
        this.name + " and these are my dogs " + dogA,
        dogB
      );
    };
    const dogs = ["red", "bones"];
    
    barkNames.apply("adam", dogs);
    //output ---> my name is adam and these are my dogs red and bones
    `;
  return <CodeBlockJS code={code} />;
};

export const DotBind = () => {
  const code = `//The .bind() method returns a new function with the this bound to the function
    const barkName = function() {
        console.log(this.name);
      };
    
    const RedBarks = barkName.bind(doggo_A)
    `;
  return <CodeBlockJS code={code} />;
};

export const NewThis = () => {
  const code = ` //The this keyword in a constructor function
    function Doggo(name, age, color, quote) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.quote = quote
    }
    const Sparky = new Doggo('Sparky', 'spotted', 'i just bark')
    console.log(Sparky.quote)
    //output --> 'i just bark'
    `;

  return <CodeBlockJS code={code} />;
};

export const WindowThis = () => {
  const code = `// Global Execution Context
    const PetTurtle = {
        name: "squares", 
        age: 22
    }

    function GetTurtlesAge{
        console.log(this.age)
    }

    getTurtlesAge()
    // age is undefined

    window.TurtlesAge = 13; 
    console.log(this.turtlesAge)
    // --> 13
    `;
  return <CodeBlockJS code={code} />;
};
