/*
D – Dependency Inversion Principle (DIP)

Definition:
High-level modules (big parts of the program) should not depend on low-level modules (details).
Both should depend on abstractions (interfaces).
And abstractions should not depend on details — details should depend on abstractions.

Why is this important?
If your main code depends directly on small details, any small change can break it.
By depending on an interface (abstraction), you can easily replace details without touching the main code.

Real-life analogy:
Think about a coffee machine — the coffee machine (high-level) doesn’t care about which type of coffee bean grinder you use (low-level).
It just needs something that follows the “grind coffee” rules.

Expectation in this example:
- We have an IEngine interface for JavaScript engines.
- Different engines (V8Engine, SpiderMonkey, Nitro) implement this interface.
- Browser class does not depend on a specific engine, only on IEngine.
- We can easily switch engines without changing the Browser class.

Benefit:
- Flexible, easily extendable.
- Stable high-level code, only change low-level classes when needed.
*/




// Base interface for all engines
interface IEngine {
    compile(code: string): void // Any engine must be able to compile JS code
}


// Concrete engine implementations
class V8Engine implements IEngine {
    compile(code: string): void {
        // Simulating how Chrome's V8 engine would compile JS
        console.log(`V8 Engine compiling: ${code}`);
    }
}

class SpiderMonkey implements IEngine {
    compile(code: string): void {
        // Simulating how Firefox's SpiderMonkey engine would compile JS
        console.log(`SpiderMonkey compiling: ${code}`);
    }
}

class Nitro implements IEngine {
    compile(code: string): void {
        // Simulating how Safari's Nitro engine would compile JS
        console.log(`Nitro compiling: ${code}`);
    }
}



// Browser depends on IEngine, not a specific engine
class Browser {
    engine: IEngine // Engine is stored as the interface type

    constructor(engine: IEngine) {
        // Inject any engine that follows IEngine rules
        this.engine = engine;
    }

    run(js: string) {
        // Browser doesn't care what engine is inside
        // It just knows it can call compile
        this.engine.compile(js);
    }
}




// Client code
const js = "function foo(){}"; // JS code we want to run

// Create browsers with different engines
const chrome = new Browser(new V8Engine());         // Chrome uses V8
const firefox = new Browser(new SpiderMonkey());    // Firefox uses SpiderMonkey
const safari = new Browser(new Nitro());            // Safari uses Nitro

// Run JavaScript code in each browser
chrome.run(js);   // Expected: V8 Engine compiling: function foo(){}
firefox.run(js);  // Expected: SpiderMonkey compiling: function foo(){}
safari.run(js);   // Expected: Nitro compiling: function foo(){}
