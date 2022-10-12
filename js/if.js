'use strict';
console.log('if.js');

// paprastas IF  ==========================
// if (<salyga>) {
//  kodo blokas vygdomas jei salyga yra true arba truthy
//   .....
// }

// IF ELSE ==========================
// if (<salyga>) {
//  kodo blokas vygdomas jei salyga yra true arba truthy
//   .....
// } else {
// vygdomas kai salyga yra false
// }

let num1 = 10000;
let num2 = 5e4;

if (num1 > num2) {
  //  kodo blokas vygdomas jei salyga yra true arba truthy
  console.log(`${num1} yra daugiau uz ${num2}`);
} else {
  // vygdomas kai salyga yra false
  console.log(`${num1} nera daugiau uz ${num2}`);
}
