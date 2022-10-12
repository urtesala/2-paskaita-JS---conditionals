'use strict';
console.log('prat 4!!!');

let username = 'admin';
let password = 'master1';
// username = 'James';
// password = 'James11';
username = prompt('username');
password = prompt('password');

if (username === '') {
  console.log('viso gero');
} else if (username === 'admin') {
  if (password === 'master') {
    // username === 'admin'
    // password === 'master'
    console.log('hello admin');
  } else {
    console.log('neteisingas slaptazodis');
  }
} else if (password === `${username}11`) {
  // username !== 'admin'
  // password === username11
  console.log(`welcome back ${username}`);
} else {
  console.log('neteisingas slaptazodis');
}
