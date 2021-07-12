import Username from "./username.js";

let instance;
const createInstance = () => {
  const classObj = new Username();
  return classObj;
};

const getInstance = () => {
  if (!instance) instance = createInstance();
  return instance;
};

const main = () => {
  const instanceOne = getInstance();
  instanceOne.username = "Jack";

  const instanceTwo = getInstance();
  console.log("Second Instance: ", instanceTwo.username);
  // Output - Second Instance:  Jack

  console.log("Are both instance equal? ", instanceOne === instanceTwo);
  // Output - Are both instance equal?  true
};

main();
