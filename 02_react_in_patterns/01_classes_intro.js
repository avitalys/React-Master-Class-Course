/**
 * JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical
 * sugar over JavaScript's existing prototype-based inheritance.
 * The class syntax does not introduce a new object-oriented inheritance
 * model to JavaScript.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * @flow
 */

// named class
class Point {
  // Class Fields (Properties)
  x: number;
  y: number;

  // constructor with default parameters
  constructor(x: number = 1, y: number = 1) {
    this.x = x;
    this.y = y;
  }

  // static method
  static distance(a: Point, b: Point): number {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

class Shape {
  // Class Fields (Properties)
  height: number;
  width: number;

  constructor(height: number, width: number): void {
    this.height = height;
    this.width = width;
  }
}

class Rectangle extends Shape {
  //height: number;
  //width: number;

  // If there is a constructor present in subclass,
  // it needs to first call super() before using "this".
  constructor(height: number, width: number) {
    super(height, width);
    // now we can use "this"
  }

  // Getter
  get area() {
    return this.calcArea();
  }
  get perimeter() {
    return this.perimeter();
  }

  // Method
  calcArea(): number {
    // flow syntex for return type
    return this.height * this.width;
  }
  calcPerimeter(): number {
    return 2 * (this.height + this.width);
  }
}

class Square extends Rectangle {
  constructor(height: number) {
    super(height, height);
  }

  about(): void {
    // Super class calls with super
    console.log("Square's perimeter is " + super.calcPerimeter()); // eslint-disable-line no-console
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

/* eslint-disable no-alert, no-console */
console.log(Point.distance(p1, p2)); // 7.0710678118654755

console.log(Rectangle.name); // outputs class name: "Rectangle"
const square = new Square(10);
console.log(square.area); // 100
console.log(square.perimeter); // 100
/* eslint-enable no-alert, no-console */

/*----------------------------------------------------*/

/* 
// Derived array class
class MyArray extends Array<number> {
  // Overwrite species to the parent Array constructor
  
  // symbols are not supported in flow right now
  // https://github.com/facebook/flow/issues/3258
  static get [Symbol.species]() {
    return Array;
  }
}

var a = new MyArray(1, 2, 3);
var mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true 
*/

/*----------------------------------------------------*/

// Mix-ins
/* A function with a superclass as input and a subclass extending that 
superclass as output can be used to implement mix-ins in ECMAScript: 
*/

var calculatorMixin = Base =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = Base =>
  class extends Base {
    randomize() {}
  };

//A class that uses these mix-ins can then be written like this:

// foo will the "Base class"
class Foo {
  createdDate: Date;
  updateDate: Date;

  constructor() {
    this.createdDate = new Date(Date.now());
  }

  set setUpdateDate(newUpdateDate: Date) {
    this.updateDate = newUpdateDate;
  }
}

// Example:
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
const bar = new Bar();
bar.calc(); // from calculatorMixin
bar.randomize(); // from randomizerMixin
bar.createdDate; // from base class "Foo"

/*----------------------------------------------------*/
