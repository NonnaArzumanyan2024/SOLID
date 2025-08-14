/*
I – Interface Segregation Principle (ISP)

Definition:
A class should not be forced to implement methods it does not use.
Each class should depend only on the methods it needs.

Benefits:
- Classes are smaller, focused, and easier to understand.
- Avoids unnecessary code in classes.
- Makes it easier to extend functionality safely.
*/




// Define Workable interface
interface Workable {
  work(): void;
}

// Define Eatable interface
interface Eatable {
  eat(): void;
}

// Human implements both Workable and Eatable
class Human implements Workable, Eatable {
  work(): void {
    console.log("Human is working...");
  }

  eat(): void {
    console.log("Human is eating lunch");
  }
}

// Robot implements only Workable
class Robot implements Workable {
  work(): void {
    console.log("Robot is working...");
  }
  // No eat() method, because robot does not need it
}


// Usage
const john = new Human();
const r2d2 = new Robot();

john.work();  // Human working
john.eat();   // Human eating

r2d2.work();  // Robot working
// r2d2.eat();  Error if uncommented, because Robot does not implement Eatable
