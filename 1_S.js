/*
S – Single Responsibility Principle (SRP)

Definition:
A class should have only ONE reason to change, meaning it should do only ONE job.

Why is this important?
If a class has more than one responsibility, changes to one responsibility
can affect the other parts and cause bugs. Keeping each class focused
makes the code easier to understand, test, and maintain.

Real-life analogy:
Think about a chef and a waiter. The chef cooks, the waiter serves.
If one person did both jobs, it would be harder to manage and more mistakes
could happen.

Benefit:
- Code is easier to read.
- Fewer unexpected bugs when making changes.
- Easier to reuse the class in other projects.

Example below:
We separate "creating a report" from "printing a report".
*/




// Class that ONLY creates a report
class ReportCreator {
  createReport(data) {     // Creates a text report from given data
    return `Report: ${JSON.stringify(data)}`;
  }
}


// Class that ONLY prints a report
class ReportPrinter {
  print(report) {         // Prints the given report
    console.log("Printing:", report);
  }
}


// Usage example
const creator = new ReportCreator();                     // Creates reports
const printer = new ReportPrinter();                     // Prints reports

const myReport = creator.createReport({ sales: 100 });   // Create report
printer.print(myReport);                                 // Print report
