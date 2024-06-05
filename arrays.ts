const numbers: number[] = [];
numbers.push(3);
// numbers.push("hello"); - gives an error

console.log(numbers);

const names: readonly string[] = [];
// names.push("hello"); - gives an error bcz of readonly

// Type Inference - infer the type of an array from values
const nums = [1, 2, 3];
nums.push(4);
console.log(nums);



// Tuples - Typed Array
// let newTupple: [number, boolean, string];
let newTupple: readonly [number, boolean, string];

newTupple = [10, true, "hello"];

// newTupple.push(11); - if its readonly then can't push new value
console.log(newTupple);

// Named Tuples
const graph: [x: number, y: number] = [10, 11];
// graph.push(19);
console.log(graph);

// Destructuring Tuples
const nums2: [number, number] = [90, 100];
const [x, y] = nums2;