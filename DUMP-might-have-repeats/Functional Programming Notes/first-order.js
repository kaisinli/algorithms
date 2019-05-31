/**
 * functions can be assigned as constants, variables, placed as array elements and even set as values of keys on an object. 
 * Additionally, (and most importantly ?!) functions can be returned to and from functions — just like any other data type!
 */

const bankStatement =
      name =>
        location =>
          balance =>
            `Hello ${name}! Welcome to the bank of ${location}. Your current balance is ${balance}`;

const statementExpectingLocation = bankStatement("Omer");
const statementExpectingBalance = statementExpectingLocation("NYC");
const bankStatementMsg = statementExpectingBalance("100 million"); // wishful thinking?

console.log(bankStatementMsg); // Hello Omer! Welcome to the bank of NYC. Your current balance is 100 million

// We could also call the function with all the arguments up front
const msg = bankStatement("Jeff Bezos")("Silicon Valley")("97.7 billion");
console.log(msg); // Hello Jeff Bezos! Welcome to the bank of Silicon Valley. Your current balance is 97.7 billion
