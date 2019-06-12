/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: When 'this' points to the window in any place. 
    It's like saying 'this house' to a house in a row of houses, 
    where we just don't know which house is being talked about.

* 2. Implicit Binding: It's like saying there is the object, so let's go to it.
    This is when 'this' is replaced by an object. Ex: this.name can be parent.name.

* 3. New Binding: Involves constructor functions creates an object,
    and we call it with 'new'. 

* 4. Explicit Binding: Giving a specific object or variable a new context. Something
    that can't be applied to anything else adn you can use methods on that specific
    object or variable
*
* write out a code example of each explanation above
*/

// Principle 1

function hello(){
    return `Hello ${this}`;
}
console.log(hello()); // returns 'Hello, [Object Window]'

// Principle 2

const petBird = {
    name: "Jojo",
    age: 19,
    food: "Jalapenos",
    feed: function(){
        return `${this.name} loves to eat ${this.food}`
    }
}
console.log(petBird.feed())

// Principle 3

function BirdTalking(person) {
    this.greeting = 'Hello ';
    this.person = person;
    this.speak = function() {
      console.log(this.greeting + this.person);
      console.log(this);
    };
  }
  
  const Jojo = new BirdTalking('Mariam');
  
Jojo.speak();

// Principle 4

// code example for Explicit Binding