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

// let userName = prompt('Username');
// let password = prompt('Password');
// console.log('Username', typeof userName);

// //   if(userName==="admin"){
// //     return password==="master",
// //     console.log('Sveiki, admin');
// //   }else if(userName==='!=admin'){
// //     return password===userName+"11"
// //   }
  
// if (
//     (userName=admin&&password == master)||
//     (userName!=admin&&password+"11")){
//         return 'Sveiki admin'
//     } else 
