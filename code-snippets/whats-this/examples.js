//Functional scope
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

//Implicit binding
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

/* 
Let's take this a step further. 
What if we wanted to indicate that these dogs are siblings? 
Me might add a sibling property. And because our properties 
are implicitly bound to the appropriate execution context
we will be able to access the expected value when we invoke the barkQuote
function from the sibling property. 

*/

doggo_B.sibling = doggo_A;

doggo_A.sibling = doggo_B;

doggo_B.sibling.barkQuote();

/* output --> the value of from the sibling object 
    "i may have gotten bigger. but my desire 
     to be held. has remained constant"
*/

/* Explicit binding to set the execution context with .call() */
const barkName = function() {
  console.log(this.name);
};

barkName.call(doggo_A);

// The .apply() method allows us to pass in an array
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

//The .bind() method returns a new function with the this bound to the function
const barkName = function() {
  console.log(this.name);
};

const RedBarks = barkName.bind(doggo_A);

const boundBark = barkName.bind(this);

// New Binding
// We can make new class like functions with the new keyword by binding each property before
