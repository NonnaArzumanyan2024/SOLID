/*
L – Liskov Substitution Principle (LSP)

Definition:
If a class extends another class, it should be able to replace it
without breaking the program's behavior.

Why is this important?
When you use a subclass, it should behave like the parent class without surprises.
If a child class changes the expected behavior, it can cause bugs.

Real-life analogy:
If you rent a car, it doesn’t matter if it’s a Toyota or a Ford.
You still expect the car to drive in the same basic way.

Benefit:
- Predictable behavior when using inheritance.
- Fewer unexpected errors in large projects.

Example below:
We separate flying birds and non-flying birds so that no bird
class breaks the expected behavior of its parent.
*/




// Parent class for all birds
class Bird {
  layEggs() {     // Common action for all birds
    console.log("Laying eggs...");
  }
}


// Bird that can fly
class FlyingBird extends Bird {
  fly() {      // Only flying birds can do this
    console.log("Flying...");
  }
}


// Penguin is a bird but does not fly
class Penguin extends Bird {
  swim() {       // Penguins swim instead
    console.log("Swimming...");
  }
}


// Usage example
const birds = [new FlyingBird(), new Penguin()];

birds.forEach(bird => bird.layEggs());   // Works for all birds
