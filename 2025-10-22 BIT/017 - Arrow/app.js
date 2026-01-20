console.log('Darkness my old friend');

// const clickMeNo1 = function () {
//     console.log('Button No1');
// }

const buttonNo1 = document.querySelector('#nr1');

buttonNo1.addEventListener('click', function () {
    console.log('Button No1');
});




// const clickMeNo2 = function () {
//     console.log('Button No1');
// }

//skiriasi zodeliu this

// Arrow Funkcija
const clickMeNo2 = () => {
    console.log('Button No2');
}


const buttonNo2 = document.querySelector('#nr2');

// buttonNo2.addEventListener('click', clickMeNo2);

// buttonNo2.addEventListener('click', () => {
//     console.log('Button No2');
// });

buttonNo2.addEventListener('click', _ => console.log('Button No2'));

const sum1 = function (a, b) {
    return a + b;
}

const sum2 = function (a, b) {
    return a + b;
}

const sum3 = (a, b) => a + b;

console.log(sum1(5, 3));
console.log(sum2(5, 3));
console.log(sum3(5, 3));


const add5 = function (a) {
    return a + 5;
}

const add5a = (a) => {
    return a + 5;
}

//Jeigu yra tik 1 parametras, galima praleist parametru sklistelius //Arrow
const add5b = a => a + 5


console.log(add5(12));
console.log(add5a(12));
console.log(add5b(12));


const bebras1 = () => {
    return 'BEBRAS';
}

const bebras2 = () => 'BEBRAS';


const bebras3 = nenaudoju => 'BEBRAS';

// Kintamasis vardu _ yra naudojamas sintaksei uzpildyti, bet nenaudojamas skaiciavimuose
const bebras4 = _ => 'BEBRAS';

console.log(bebras1());
console.log(bebras2());
console.log(bebras3());
console.log(bebras4());


console.clear();

//Ciklai pradzia.


// for (let i = 0; i < 10; i++) {
//     console.log('Bla bla', i);
// }

for (let i = 0; i < 10; i+=2) {
    console.log('Bla bla', i);
}

// panaudojimas 1. radimas 2. agregacija

const word = 'bebras';

let found = 'r raide nerasta';


for(let i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        found = `"R" rasta ${i} vietoje`; //uzrasas niekobendro su ciklu neturi
    }
} //blokas kartojasi 

console.log(found); // nera ciklo bloke ir nesikartoja

let count = 0;
for (let i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        count++;
    }
}

console.log(`zodyje ${word} yra ${count} "r"`)

/* 
Ciklai:

for
wile
do while
for in
for off
switch

Ciklo valdymas:
break 
continue
*/