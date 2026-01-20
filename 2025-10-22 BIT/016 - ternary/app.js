console.log('svenciu sventes');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// 0. kintmajam priskirti atsitiktine reiksme nuo 10 iki 99. ja atspauzdinti kosoleje.

let atsitiktine = rand(10, 99);

console.log(atsitiktine);

// 1. sugeneruoti atsitiktine reiksme nuo 10 iki 99. jei ta reiksme mazesne uz 50 kintamajam animal priskirti reiksme 'bebras'. kitu atveju priskirti reiksme 'barsukas'. atsitiktine reiksme ir animal kintamaji atspauzdinti konsoleje. 

const sk1 = rand(10, 99);

let givunas;


if (sk1 < 50) {
    givunas = 'bebras';
} else {
    givunas = 'barsukas';
}

console.log(givunas, sk1);

// 2. parasyti funkcija, kuri spausdina atsitiktini skaiciu. nuo 1 iki 5;

const rng = function(sk2, sk3) {
    return rand(sk2, sk3);
}

console.log(rng(1, 5));

// virsuje kaip as parasiau, apacioje kaip realiai reikejo tik funkcija padaryti.

function vienasPenki() {
    console.log(rng(1, 5));
}

vienasPenki();
vienasPenki();


// 3. parasyti funkcija, kuri grazina atsitiktini skaiciu nuo 1 iki 5. Grazinta skaiciu reikia priskirti kintamajam skaicius15. Kintamaji akicius15 padauginti is 5 ir gauta rezultata atspauzdinti konsoleje.

function yeye() {
    let skaicius15 = (rand(1, 5) * 5);
    return skaicius15
}
console.log(yeye());


// 4. Parašyti funkciją kuri grąžina stringą 'Puiki diena'. Gautą stringą priskirti kintamąjam
// tą kintamąjį atspausdinti



function pdiena() {
    return 'Puiki diena';
}

let dienap = pdiena();

console.log(dienap);


// 5. Parašyti funkciją kuri grąžina atsitiktine tvarka arba stringą 'A' arba 'B'
// Gautą grąžintą stringą priskirti kintamajam raide. Kintamąjį atspausdinti
 

let raide1 = rand(1, 5);
let raide2 = rand(1, 5);

function ab(r1, r2) {
    if (r1 <= r2) {
    return 'A';
    }
    return 'B';
} 

const raide = ab(raide1, raide2);

console.log(raide);


////////////////////////////////
console.clear();

let kas;
if (24 > 15) {
    kas = 'TAIP';
} else {
    kas = 'NE';
}

console.log(kas);

// paprastai virsuje, terneris apacioja

const kas2 = 24 > 15 ? 'TAIP' : 'NE'; // priskiriamoji salyga - ternary operator

console.log(kas2);


function aBT() {
    return rand(0, 1) ? 'A' : 'B';
}

const raideT = aBT();

console.log(raideT);

// 6. Parašyti funkciją kuriai duodate bet kokį stringą, o ji grąžina pirmą stringo raidę.
// Pademonstruoti veikimą konsolėje

const stringas = function(zodis) {
    return zodis[0];
}


console.log(stringas('Briedis'));


// 7. Parašyti funkciją kuriai duodate bet kokį stringą, o ji grąžina paskutinę stringo raidę.
// Pademonstruoti veikimą konsolėje

const stringas2 = function(zodis) {
   const abc = zodis.length - 1;
   return zodis[abc];
}


console.log(stringas2('Briedis'));

// Gintaro varijantas apacioje.

const stringas3 = function(zodis) {
    return zodis[zodis.length - 1];
}


console.log(stringas3('Briedis'));

// 8. Parašyti funkciją kuri konsolėje spausdina 'Labas'
// Funkcija turi pasileisti paspaudus mygtuką html faile (html faile reikia sukurti tokį mygtuką)
 
const btnPress = function() {
    console.log('Labas');
}

const button1 = document.querySelector('#nr1');

button1.addEventListener('click', btnPress);







