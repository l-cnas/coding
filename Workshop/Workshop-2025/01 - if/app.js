console.log('Good morning!')



function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// if (salyga) {
//     vyksta jei saliga issipildo
// } else {
//     vyksta jei neissipildo
// }

// 1. Ridenam kamuoliuką. Į atitinkamus tag'us parašom skaičių ir ar skaičius lyginis/nelyginis.
// Lyginį skaičių nudažom mėlynai, nelyginį - raudonai.


let skaicius = document.querySelector('.uzduotis1 > p > span');
// skaicius.innerText = 'hello';

let lygNelyg = document.querySelector('.uzduotis1 > p + p > span')
// lygNelyg.innerText = 'pataikem';

let ridenam = rand(1, 6);
skaicius.innerText = ridenam;

if (ridenam == 2 || ridenam == 4 || ridenam == 6) {
    lygNelyg.innerText = 'lyginis';
    skaicius.style.color = 'blue';
} else {
    lygNelyg.innerText = 'nelyginis';
    skaicius.style.color = 'chrimson';
}


// 2. Petras ir Birutė ridena kamuoliuką. Į atitinkamus tagus įrašyti išridentus skaičius. 
// Didesnį skaičių nuspalvinti žaliai.
// Parašyti kas nugalėjo.

let petroRez = document.querySelector('.uzduotis2 > p > span');
let birutesRez = document.querySelector('.uzduotis2 > p + p > span');
const nugaletojas = document.querySelector('.uzduotis2 > p + p + p > span');

const ridenaPetras = rand(1, 6);
petroRez.innerText = ridenaPetras;

const ridenaBirute = rand(1, 6);
birutesRez.innerText = ridenaBirute;

if (ridenaPetras < ridenaBirute) {
    nugaletojas.innerText = 'Birute!';
} else {
    if (ridenaPetras > ridenaBirute) {
        nugaletojas.innerText = 'Petras!';
    } else {
        nugaletojas.innerText = 'Ridenkit dar karta!';
    }
} 
