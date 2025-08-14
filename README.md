# SOLID
This repository contains beginner-friendly JavaScript examples demonstrating all 5 SOLID Principles in JavaScript

Welcome to my "SOLID Principles" repository!  
Here you will find clear and simple examples of all **5 SOLID principles** in JavaScript, written in a friendly and easy-to-understand style.

---

## What is SOLID?

SOLID is a set of 5 principles for writing clean, maintainable, and flexible object-oriented code.  
Following SOLID helps developers:

- Write code that is easy to read and understand  
- Reduce bugs when changing or extending code  
- Make code reusable in different projects  
- Keep classes and functions simple and focused  

The name "SOLID" comes from the first letters of each principle:



| Letter |           Principle             |              Simple Meaning                      |
|--------|---------------------------------|--------------------------------------------------|
| S      | Single Responsibility Principle | One class = one job                              |
| O      | Open/Closed Principle           | Add new features without changing old code       |
| L      | Liskov Substitution Principle   | Subclasses should behave like parent classes     |
| I      | Interface Segregation Principle | Don’t force classes to have unnecessary methods  |
| D      | Dependency Inversion Principle  | Depend on abstractions, not concrete classes     |




## Why SOLID is important

1. Easier to maintain:       Changes in one part do not break other parts.  
2. Easier to extend:         You can add new features without touching old code.  
3. Reusable code:            Small, focused classes can be reused in different projects.  
4. Predictable behavior:     Subclasses behave correctly, and interfaces stay simple.  
5. Flexible architecture:    High-level modules do not depend on low-level details.





## Detailed explanation of each principle

### 1. Single Responsibility Principle (SRP)
- Definition: A class should have only one reason to change.  
- Why it matters: If a class does multiple things, a small change in one feature can break others.  
- Benefit: Code is easier to read, debug, and reuse.  
- Example:
  - A class that creates a report should NOT also print the report.  
  - Split into `ReportCreator` and `ReportPrinter`.  

---

### 2. Open/Closed Principle (OCP)
- Definition: Classes should be open for extension but closed for modification.  
- Why it matters: Modifying old code is risky and can introduce bugs.  
- Benefit: You can add new features safely without touching existing code.  
- Example:
  - A shape calculator should allow adding new shapes (triangle, circle) without modifying the original code.  
  - Use inheritance or polymorphism to extend functionality.

---

### 3. Liskov Substitution Principle (LSP)
- Definition: Subclasses should be replaceable with their parent class without breaking the program.  
- Why it matters: Code that uses a parent class should work correctly with any subclass.  
- Benefit: Subclasses behave predictably, preventing unexpected errors.  
- Example:
  - A `Bird` class has a method `layEggs()`.  
  - Any subclass like `FlyingBird` or `Penguin` should also support `layEggs()` without breaking code.  

---

### 4. Interface Segregation Principle (ISP)
- Definition: Classes should not be forced to implement methods they do not use.  
- Why it matters: Large “fat” interfaces make code hard to maintain.  
- Benefit: Classes are simpler, easier to understand, and more focused.  
- Example: 
  - `Human` can work and eat → implements `Workable` and `Eatable`.  
  - `Robot` can work but does NOT need an `eat()` method.  

---

### 5. Dependency Inversion Principle (DIP)
- Definition: High-level modules should depend on abstractions, not on concrete implementations.  
- Why it matters: Tight coupling to specific classes makes code hard to change or extend.  
- Benefit: Flexible and reusable architecture; easy to switch components.  
- Example:
  - `UserService` depends on a `Database` interface, not directly on `MySQLDatabase` or `MongoDBDatabase`.  
  - You can swap databases without changing `UserService`.  

---

## Files in this repository

1. 1_S.js –  Shows a class doing only one job.  
2. 2_O.js –  Demonstrates adding new features without modifying old code.  
3. 3_L.js –  Shows subclasses behaving correctly.  
4. 4_I.js –  Demonstrates splitting interfaces so classes implement only what they need.  
5. 5_D.js –  Shows high-level code depending on abstractions, not concrete classes.

Each file has:
- Top explanation – Simple theory of the principle  
- Line-by-line comments – Easy-to-understand code examples  

