// Explicit Type : writing out the type
let greetings: string = "Hello, world!";
// greetings = 23; - throw an error
console.log(greetings);

// Implicit Type: TypeScript will "guess" the type, based on the assigned value
let myNum = 10;
// myNum = "hello"; - throw an error


// number
// automatically detect type if we assign value
let userId = 3344;
userId.toFixed(2);

// boolean
let isLoggedIn: boolean = false;

// any
let hero; // assign type 'any'
let name: any = true;
name = "hello"; // gives no error bcz of type any
Math.round(name); // gives no error bcz of type any

// unknown
let myNumber: unknown = 1;
myNumber = "Hello"; 

function getHero(){
    return "Thor";
}

hero = getHero();
export {};
