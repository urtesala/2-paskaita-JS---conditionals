'use strict';
console.log('string.js');

let sen1 = 'Jei nori parasysti kazka \"kabubese\" tai reikia \n sukeisti kabuciu tipa arba parasyti \\   ';
console.log('sen1', sen1);

let backTickSent = `galim 
rasyti 
keliose eilutese
`

console.log('backTickSent', backTickSent);
console.log('backTickSent upper', backTickSent.toLocaleUpperCase());


let sent2 = 'gyveno karta programuotas';
console.log(sent2.charAt(0).toLocaleUpperCase() + sent2.slice(1));
console.log(sent2.charAt(8));


let sarasas = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;

// nusitaikyti i el su id result
const divEl = document.getElementById('result');
divEl.innerHTML = sarasas;