/*
I – Interface Segregation Principle (ISP)

Definition:
A class should not be forced to implement methods it does not use.
Each class should depend only on the methods it actually needs.

Expectation in this Tetris example:
- Each figure (Square, Zigzag, Line) has a position (x, y).
- Only figures that can move implement the IMoveable interface.
- Only figures that can rotate implement the IRotatable interface.
- SquareFigure cannot rotate, so it only implements movement.
- ZigzagFigure and LineFigure can both move and rotate, so they implement both interfaces.
- This keeps each class focused, simple, and prevents unnecessary methods.
*/




// Base interface for all figures: stores position
interface IFigure {
    x: number
    y: number
}

// Interface for movable figures: can move left and right
interface IMoveable extends IFigure {
    moveLeft(): void
    moveRight(): void
}

// Interface for rotatable figures: can rotate
interface IRotatable extends IFigure {
    rotate(): void
}

// Square figure: can move but cannot rotate
class SquareFigure implements IMoveable {
    constructor(public x: number, public y: number) {}

    moveLeft(): void { 
        this.x -= 1
        console.log(`Square moved left to x=${this.x}`)
    }
    moveRight(): void { 
        this.x += 1
        console.log(`Square moved right to x=${this.x}`)
    }
}


// Zigzag figure: can move and rotate
class ZigzagFigure implements IMoveable, IRotatable {
    constructor(public x: number, public y: number) {}

    moveLeft(): void { 
        this.x -= 1
        console.log(`Zigzag moved left to x=${this.x}`)
    }
    moveRight(): void { 
        this.x += 1
        console.log(`Zigzag moved right to x=${this.x}`)
    }
    rotate(): void { 
        console.log("Zigzag rotated") 
    }
}


// Line figure: can move and rotate
class LineFigure implements IMoveable, IRotatable {

    constructor(public x: number, public y: number) {}

    moveLeft(): void { 
        this.x -= 1
        console.log(`Line moved left to x=${this.x}`)
    }
    moveRight(): void { 
        this.x += 1
        console.log(`Line moved right to x=${this.x}`)
    }
    rotate(): void { 
        console.log("Line rotated") 
    }
}



//Test Cases

// Create figures
const square = new SquareFigure(0, 0);
const zigzag = new ZigzagFigure(2, 0);
const line = new LineFigure(4, 0);

// Test movement
square.moveLeft();     // Expected: Square moved left to x=-1
square.moveRight();    // Expected: Square moved right to x=0

zigzag.moveLeft();    // Expected: Zigzag moved left to x=1
zigzag.moveRight();    // Expected: Zigzag moved right to x=2
zigzag.rotate();       // Expected: Zigzag rotated

line.moveLeft();       // Expected: Line moved left to x=3
line.moveRight();      // Expected: Line moved right to x=4
line.rotate();         // Expected: Line rotated
