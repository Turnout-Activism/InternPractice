// Abstraction 

/**
 * @file Guitar Function
 * @author Giovann Fox (backend)
 */

export default class Guitar {
    constructor() {
        this.guitarName = "guitarName";
        throw new Error("You cannot create an instance of Abstract Class");
    }
    display() {
        return "Guitar is: " + this.guitarName;
    }
}


//Creating a constructor function
export default class Jackson {
    constructor(guitarName) {
        this.guitarName = guitarName;
    }
}

//Creating object without using the function constructor
Jackson.prototype = Object.create(Guitar.prototype);
var jackson = new Jackson("Warrior");
document.writeln(jackson.display());