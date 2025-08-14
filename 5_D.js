/*
D – Dependency Inversion Principle (DIP)

Definition:
Depend on general ideas (abstractions), not on exact classes.

Why is this important?
If your high-level code depends on specific low-level details,
changing those details will require rewriting your main logic.

Real-life analogy:
If you use a charger with a USB port, you can connect any cable — phone, tablet, etc.
The charger depends on the general USB idea, not the specific device.

Benefit:
- Makes code flexible.
- Easy to swap out parts without breaking the whole system.

Example below:
The service depends on a Database interface, not on a specific database.
*/




// General database interface
class Database {
  connect() {    // Must be replaced in child classes
    throw new Error("connect() must be implemented");
  }
}


// MySQL database
class MySQLDatabase extends Database {
  connect() {
    console.log("Connecting to MySQL...");
  }
}


// MongoDB database
class MongoDBDatabase extends Database {
  connect() {
    console.log("Connecting to MongoDB...");
  }
}


// High-level service depends on Database, not on a specific one
class UserService {
  constructor(database) {
    this.database = database;   // We can pass any database here
  }

  start() {
    this.database.connect();    // Connect to chosen DB
    console.log("User service started.");
  }
}



// Usage example
const mysqlService = new UserService(new MySQLDatabase());
mysqlService.start();    // Uses MySQL

const mongoService = new UserService(new MongoDBDatabase());
mongoService.start();    // Uses MongoDB
