console.log('Hello, Loop!');

// Duotas žodis "Meškėnas". Reikia konsolėje atskirai atspausdinti po vieną visas raides

const word = 'Meškėnas';
let out = '';

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);      // konsolė spausdina daug kartų
    out += word[i] + '\n';     // blokas kartojasi
}

console.log(out);              // konsolė spausdina vieną kartą

// Duotas žodis "Meškėnas". Reikia HTML žodį atspausdinti stulpeliu

const body = document.querySelector('body');

for (let i = 0; i < word.length; i++) {
    const div = document.createElement('div'); // sukuriam kiekvienai raidei div'ą
    div.innerText = word[i];                   // įdedam raidę į div'ą
    body.appendChild(div);                     // įkeliam div'ą į body
}


console.clear();

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}




let nuber1;



do {
    number1 = rand(0, 10);
    console.log(number1);

} while (number1 > 5)

console.clear();

// Sakykime, kad metate monetą ir ji gali iškristi H, kaip herbas arba S, kaip skaičius. Tam panaudojame
// rand funkciją

// let coin = rand(0, 1) ? 'H' : 'S';
// console.log(coin);

// Mesti monetą, kol iškris H t.y. herbas


// let coin;

// do {
//     coin = rand(0, 1) ? 'H' : 'S';
//     console.log(coin);
// } while (coin != 'H');

/*
    kaip kas keiciasi
    == <---> !=
    > <---> <=
    < <---> >=
    || <---> &&

*/

// Mesti monetą, kol iškris 3 H t.y. 3 kartus herbas


let coin;
let metimuSkaicius = 0;
let saugiklis = 100;

do {
    coin = rand(0, 1) ? 'H' : 'S';
    console.log(coin);
    if (coin != 'H') {
        metimuSkaicius++;
    }

    console.log('Herbu ' + metimuSkaicius);

    saugiklis--
    if(!saugiklis) {
        console.log('Suveike saugiklis');``
        break;
    }
} while (metimuSkaicius < 3);







