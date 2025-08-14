/*
I – Interface Segregation Principle (ISP)

Definition:
A class should not be forced to implement methods it does not use.
Each class should depend only on the methods it needs.

Why this is important:
- Large “fat” interfaces make classes complicated and harder to maintain.
- Forcing a class to implement unused methods can lead to errors and confusion.
- By splitting interfaces into smaller, focused ones, classes stay simple, readable, and flexible.

Real-life analogies:
1. Vehicles:
   - A bicycle interface should NOT have a "fly()" method.
   - A car interface should NOT have a "pedal()" method.
   - Each vehicle class only implements the actions it actually can perform.
   
2. Office employees:
   - A software developer has methods like "writeCode()" and "attendMeeting()".
   - A cleaner has methods like "cleanRoom()" and "restockSupplies()".
   - You should not force a cleaner to implement "writeCode()".

3. Kitchen appliances:
   - A toaster only needs "toastBread()".
   - A coffee machine only needs "brewCoffee()".
   - Neither appliance should be forced to implement the other appliance’s methods.

Benefits of following ISP:
- Classes are smaller, focused, and easier to understand.
- Reduces coupling and avoids unnecessary code.
- Easier to extend functionality safely without breaking other classes.
- Improves maintainability and readability of the code.

How we implement in JavaScript:
- JavaScript does not have real interfaces like TypeScript or Java.
- We simulate interfaces using abstract classes or “contracts” that define required methods.
- Each class that “implements” the interface must define the required methods.
- This way, every class adheres to a focused contract and nothing extra.
*/




// Workable "interface" (abstract class)
class Workable {
  work() {
    throw new Error("Method 'work()' must be implemented.");
  }
}

// Eatable "interface" (abstract class)
class Eatable {
  eat() {
    throw new Error("Method 'eat()' must be implemented.");
  }
}

// Human implements both Workable and Eatable
class Human extends Workable {
  work() {
    console.log("Human is working...");
  }

  eat() { 
    console.log("Human is eating lunch");
  }
}

// Robot implements only Workable
class Robot extends Workable {
  work() {
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
// r2d2.eat();  Would throw error if called
