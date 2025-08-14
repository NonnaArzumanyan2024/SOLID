/*
O – Open/Closed Principle (OCP)

Definition:
Code should be OPEN for extension (adding new features) but CLOSED for modification
(changing old code).

Why is this important?
When you add a new feature, you should not have to rewrite existing working code.
This reduces the risk of introducing new bugs.

Real-life analogy:
Think of a power socket. You can plug in different devices without changing the socket itself.

Benefit:
- Existing code stays stable.
- Easier to add new features without breaking old ones.

Example below:
We can add new shapes without editing old shape code.
*/




// Base class for all shapes
class Shape {
  area() {                 // This method will be replaced in child classes
    throw new Error("area() must be implemented");
  }
}


// Circle shape
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {        // Calculate circle area
    return Math.floor(Math.PI * this.radius ** 2);
  }
}


// Square shape
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {      // Calculate square area
    return this.side ** 2;
  }
}


// Adding a new shape without touching old code
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  area() { // Calculate triangle area
    return (this.base * this.height) / 2;
  }
}


// Usage example
const shapes = [new Circle(5), new Square(4), new Triangle(3, 6)];
shapes.forEach(s => console.log(s.area()));      // Prints area for each shape
