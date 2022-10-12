// atvaizduoa daugiau klaidu
'use strict';
console.log('main.js');

let num1 = 11.34233
let num2 = 23.433

//Math.round

let rounded = Math.round(num1);
console.log(rounded);

// math floor
let floor = Math.floor(num2);
console.log(floor);

// Math.ceil
let ceil = Math.ceil(num1);
console.log(ceil);

// to fixed
console.log('Fixed', num1.toFixed(2));
console.log('Fixed', +num1.toFixed(2));
console.log('Fixed', typeof +num1.toFixed(2));

// surasti kaip is 24 istraukti kvadratine sakni (math)
console.log('Kvadratine saknis Math.sqrt', Math.sqrt(16));

// pakelti 5, 7 laipsniu
console.log('pakelti 5,7 laipsniu'), Math.pow(5,7);
console.log('pakelti 5,7 laipsniu', 5 ** 7);

// min max
console.log('Math.max(0, 150, 24, 15, 500, 7)', Math.max (0, 150, 24, 15, 500, 7));
console.log('Math.max(0, 150, 24, 15, 500, 7)', Math.min (0, 150, 24, 15, 500, 7));

// math random

console.log ('Math.random()', Math.random());
console.log ('Math.random()', Math.random());

let random1to10 = Math.trunc(Math.random()*10+1);
console.log('random1to10', random1to10);

let kaina = 45.6;
let pricedFixed = kaina.toFixed(2);

// Jusu prekes kaina yra 45.60 eur

console.log('Jusu prekes kaina yra', kaina.toFixed(2),'eur');

// teisingai--
console.log(`Jusu prekes kaina yra ${kaina}0 eur`);
console.log(`Jusu prekes kaina yra ${pricedFixed} eur`);