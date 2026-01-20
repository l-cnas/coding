console.log('-.- x2');


const animals = [];

animals.push('Zuikis', 'Bebras', 'Barsukas'); //sudeda i masyva

animals.unshift('Briedis', 'Mamutas'); // sudeda i masyva, bet nuo pradzios

console.log(animals);

animals.pop(); // ismeta paskutini elementa, tik viena

console.log(animals);

animals.shift(); // ismeta pirma elementa.

console.log(animals);

// ismetus elementa, indeksai persiskaiciuoja. briedi ismetem, tai nulis palieka kitas.

const pushResult = animals.push('Vilkas'); //grazina push rezultata - masyvo dydi su pridetais elementais. 

console.log(pushResult, animals);

const popResult = animals.pop();

console.log(animals);
console.log(popResult); // gražina išmestą elementą

/* 
Paieska
Agregacija
Filtracija
Rusiavimas
cia ka galime daryti su masyvu.

*/

console.clear();

const numbers = [54, 85, 31, -4, 57, 131, -78, 54, 54, 798, 0, 3, 74];

// paieska

let findWhat = 54;
let findResultIndex = -1; // Rasto skaiciaus indeksas

// for (let i = 0; i < numbers.length; i++) {
//     if (findWhat == numbers[i]) {
//         findResultIndex = i;
//         break;
//     }

// } Sitas break, sustabdo viska po pirmo radimo.

let findRow = 2; // kelinta rezultato mums reikia.
let findResultRow = 0;

for (let i = 0; i < numbers.length; i++) {
    if (findWhat == numbers[i]) {
        findResultIndex = i;

        findResultRow++; // skaiciuojam kelintas rezultatas

        if (findRow == findResultRow) {
            break; // jei sutapo rezultatai, nutraukia cikla ir is jo iseina. 
        }
    }
}

console.log(findResultIndex);

console.clear();

// 1. Koks meškos numeris - numerį atspausdinti konsolėje

const miskoZveris = document.querySelectorAll('ol li');
let koIeskom = 'Meška';
let rastas = -1;

for (let i = 0; i < miskoZveris.length; i++) {
    if (koIeskom == miskoZveris[i].innerText) {
        rastas = i;
        break;
    }
}

console.log(koIeskom, 'kur radom? - ', rastas + 1, 'krume, netoli musu.');

// 2. Sąraše varną nuspalvinkit baltai
 
for (let i = 0; i < miskoZveris.length; i++) {
    if ('Varna' == miskoZveris[i].innerText) {
        rastas = i;
        miskoZveris[i].style.color = 'white';
        break;
    }
}

// Sąraše visus išskyrus Pelėdą ir Gaidį nuspavlvinti orange

for (let i = 0; i < allAnimalsLi.length; i++) {

    if (allAnimalsLi[i].innerText == 'Pelėda' || allAnimalsLi[i].innerText == 'Gaidys') {
        continue; // pradeda naują iteraciją (ciklo prasukimą toliau +1)
    }

    allAnimalsLi[i].style.color = 'orange';
}


// su if neigiama logika
// for (let i = 0; i < allAnimalsLi.length; i++) {
//
//     if (allAnimalsLi[i].innerText != 'Pelėda' && allAnimalsLi[i].innerText != 'Gaidys') {
//         allAnimalsLi[i].style.color = 'orange';
//     }
//
// }
