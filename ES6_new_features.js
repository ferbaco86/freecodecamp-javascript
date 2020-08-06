//ES6 NEW FEATURES

// Rest Parameters

const sum = (...args) => {
  let a = args[0]
  let b = args[1]
  return args.reduce((a, b) => a + b, 0);
}

//Spread Operator

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; 

console.log(arr2);

//Destructuring Assignment

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today,tomorrow} = HIGH_TEMPERATURES;

//Destructuring Assignment for assigning new variables

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES; 

//Destructuring Assignment to Assign Variables from Nested Objects

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST

//Destructuring Assignment to Assign Variables from Arrays

let a = 8, b = 6;
// Only change code below this line
[a,b] = [b,a];

//Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [a,b,...arr] = list; 
  
  return arr;
}
const arr = removeFirstTwo(source);

//Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0; 

//Create Strings using Template Literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  let resultArray= []
  for(let i = 0; i < arr.length; i++) {
    resultArray.push(`<li class="text-warning">${result.failure[i]}</li>`);
  }
  const resultDisplayArray = resultArray;

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

//Concise Object Literal Declarations Using Object Property Shorthand

const createPerson = (name, age, gender) => {
  "use strict";
  return({name, age, gender});
};

//Concise Declarative Functions with ES6

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);

//Class Syntax to Define a Constructor Function

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

//Getters and setters to Control Access to an Object

class Thermostat {
  constructor(farenheit) {
    this._farenheit = farenheit ;
  }
  get temperature() {
    return 5/9 * (this._farenheit - 32);
  }

  set temperature(celsTemp) {
    this._farenheit = celsTemp * 9.0 / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

//Create a Module Script

<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>

//Use export to Share a Code Block

export const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {lowercaseString};

// Reuse JavaScript Code Using import

import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

//Import everything

import * as stringFunctions from "./string_functions.js";


stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//Export Fallback with export default

export default function subtract(x, y) {
  return x - y;
}

//Import a Default Export

import subtract from "./math_functions.js";
  
subtract(7,4);

//JavaScript Promise

const makeServerRequest = new Promise((resolve,reject) => {

});

// Complete a Promise with resolve and reject

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

//Handle a Fulfilled Promise with then

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
    makeServerRequest.then(result => {console.log(result)})
  } else {  
    reject("Data not received");
  }
});

//Handle a Rejected Promise with catch

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
    makeServerRequest.catch(error => { console.log(error)})
  }
});

makeServerRequest.then(result => {
  console.log(result);
});