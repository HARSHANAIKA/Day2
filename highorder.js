// Higher-order function example
function greet(name) {
    return function(message) {
      console.log(`${message}, ${name}!`);
    };
  }
  
  // Passing a function as an argument
  function callWithHello(callback) {
    callback('Hello');
  }
  
  // Using the higher-order function
  const greetJohn = greet('John');
  const greetJane = greet('Jane');
  
  // Calling the higher-order function
  greetJohn('Good morning'); 
  greetJane('Good evening');  
  
  // Passing a function as an argument to another function
  callWithHello(greetJohn); 
  callWithHello(greetJane); 