"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import fs
const fs = __importStar(require("fs"));
// read input txt file and seperate by blank line
const input = fs.readFileSync('input.txt', 'utf8').split('\r\n');
let elfsWithCalories = [];
for (let i = 0; i < input.length; i++) {
    let num = parseInt(input[i]);
    //console.log(num)
    if (isNaN(num))
        elfsWithCalories.push(0);
    else
        elfsWithCalories[elfsWithCalories.length - 1] += num;
}
// sort array in largest -> smallest order
elfsWithCalories.sort((a, b) => b - a);
// find the largest number of calories
let maxCalories = elfsWithCalories[0];
console.log("Largest: " + maxCalories);
// part 2
console.log("Second: " + elfsWithCalories[1]);
console.log("Third: " + elfsWithCalories[1]);
console.log("Total: " + (elfsWithCalories[0] + elfsWithCalories[1] + elfsWithCalories[2]));
