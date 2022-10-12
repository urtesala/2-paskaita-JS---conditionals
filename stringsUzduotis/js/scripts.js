'use strict';

const userInfoOutput = document.getElementById('main');

let user = {
    vardas: 'Benacijus',
    pavarde: 'Stalacijus',
}

let resultHtml = `
<h2> User information </h2>
<p> Vartotojo vardas yra ${user.vardas}, pavarde yra ${user.pavarde} </p>`

console.log('resulHtml', resultHtml );

userInfoOutput.innerHTML = resultHtml;