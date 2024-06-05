function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}
let myVal = addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("hello");

function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("monu", "monu@gmail.com", false);

// default parameter
// specifying the value while passing parameters
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("nanu", "nanu@gmail.com");

// function getValue(myValue: number): boolean {
//     if(myValue > 5){
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
    return `hero is ${hero}`;
})

// void represents the return value of functions which don’t return a value.
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

// Optional Parameters
function add(a: number, b: number, c?: number){
    return (a + b + (c || 0));
}


// named parameters
function divide({dividend, divisor}: {dividend: number, divisor: number}): number{
    return dividend / divisor;
}
export {};