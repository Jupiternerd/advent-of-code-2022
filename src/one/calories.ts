// import fs
import * as fs from 'fs';

// read input txt file and seperate by blank line
const input = fs.readFileSync('input.txt', 'utf8').split('\r\n');

let elfsWithCalories: number[] = [];

for (let i = 0; i < input.length; i++) {
    let num = parseInt(input[i]);
    //console.log(num)
    if (isNaN(num)) elfsWithCalories.push(0); 
    else elfsWithCalories[elfsWithCalories.length - 1] += num;
}

// sort array in largest -> smallest order
elfsWithCalories.sort((a, b) => b - a);

// find the largest number of calories
let maxCalories = elfsWithCalories[0];
console.log("Largest: " + maxCalories)

// part 2

console.log("Second: " + elfsWithCalories[1])

console.log("Third: " + elfsWithCalories[1])

console.log("Total: " + (elfsWithCalories[0] + elfsWithCalories[1] + elfsWithCalories[2]))