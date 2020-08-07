//Create a Basic JavaScript Object

let dog = {
  name: "Kissy",
  numLegs: 2
};

//Use Dot Notation to Access the Properties of an Object

let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name, dog.numLegs);

//Create a Method on an Object

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs.";
  }
};

dog.sayLegs();

//Make Code More Reusable with the this Keyword

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

//Creating a constructor

function Dog () {
  this.name = "Kissy";
  this.color = "White";
  this.numLegs = 4;
}

//Use a Constructor to Create Objects

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog();

//Extend Constructors to Receive Arguments

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Fluffy", "White");

//Verify an Object's Constructor with instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(3);
myHouse instanceof House;

//Understand Own Properties

