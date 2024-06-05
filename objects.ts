const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

// Type Inference
// const User = {
//   name: "manu",
//   email: "manu@gmail.com",
//   isActive: true,
// };

// passing parameters are must be type of as specified
// function createUser({name, isPaid}: {name: string, isPaid: boolean}) {}

// let newUser = { name: "tony", isPaid: false, email: "tony@gmail.com" };

// createUser(newUser);

// type of return value
// function createCourse(): { name: string; price: number } {
//   return { name: "nodejs", price: 999 };
// }

// Type Aliases
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: false};
// }

// createUser({name: "", email: "", isActive: false})

// optional property -> properties defined with "?"
type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}

let myUser: User = {
    _id: "1234",
    name: "h",
    email: "h@example.com",
    isActive: false,
}

myUser.email = "h@gmail.com";
// myUser._id = "1234"; - throws an error

type myCar = string;

let myCar1: myCar = "Toyota";

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

const cardData: cardDetails = {
    cardNumber: "1234",
    cardDate: "20/10/2023",
    cvv: 123,
}


// Interfaces are similar to type aliases, except they only apply to object types
interface Rectangle {
    height: number,
    readonly width: number,
}

const rectangle: Rectangle = {
    height: 10,
    width: 20,
}

rectangle.height = 12;

interface ColoredRectangle extends Rectangle {
    color: string,
}

const coloredRectangle: ColoredRectangle = {
    height: 10,
    width: 20,
    color: 'black',
}

// Union Types - value can be more than a single type
// Union | (OR)
let printStatusCode = (code: number | string) => {
    console.log(code);
}

// both are valid
printStatusCode(200);
printStatusCode('200');


export {};
