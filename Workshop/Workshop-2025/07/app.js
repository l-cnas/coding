// 1. Suskaičiuoti kiek masyve yra lyginiu skaičių
// let numbers2 = [2, 7, 4, 9, 12, 15, 18];
// Parašyti funkciją, kuri gauna masyvą kaip argumentą ir grąžina kiek masyve yra lyginių skaičių.
// Rezultatas: 4

console.log('#~Pirmas');

let numbers2 = [2, 7, 4, 9, 12, 15, 18];
let kiekLyginiu = 0;

for (let i = 0; i < numbers2.length; i++) {
    numbers2[i] % 2 == 0 ? kiekLyginiu += 1 : '';

}

console.log('Atsakymo rezultatas: ', kiekLyginiu);


// 2. Pirkinių krepšelis
// Sukurkite funkciją, kuri priima masyvą (kaip argumentą) su prekių objektais:

// let pirkiniuKrepselis = [
//   { name: "Milk", price: 2.00, count: 2 },
//   { name: "Bread", price: 1.20, count: 1 },
//   { name: "Eggs", price: 3.00, count: 1 },
//   { name: "Bacon", price: 3.50, count: 1 }
// ]
// Apskaičiuoti bendrą krepšelio kainą.
// Jeigu bendra suma > 10 €, taikyti 10% nuolaidą.
// Grąžinti galutinę sumą, suapvalintą iki 2 skaičių po kablelio

console.log('#~Antras');

let pirkiniuKrepselis = [
    { name: "Milk", price: 2.00, count: 2 },
    { name: "Bread", price: 1.20, count: 1 },
    { name: "Eggs", price: 3.00, count: 1 },
    { name: "Bacon", price: 3.50, count: 1 }
]

function sumPirkiniuKaina(a, b) {
    let sum = 0;
    let sumNuolaida = b;
    for (let i = 0; i < a.length; i++) {
        sum += a[i].price * a[i].count;
    }
    if (sum > 10 && b != undefined) {
        sumNuolaida = sum * ((100 - b) / 100);
        return sumNuolaida.toFixed(2);
    } else {
        return sum;
    }

};

console.log(sumPirkiniuKaina(pirkiniuKrepselis, 10));

// 3. Teigiamų skaičių suma
// Duotas masyvas:
// let numbers = [4, -2, 7, -1, 0, 5];
// Užduotis:
// Parašyti funkciją, kuri suskaičiuoja tik teigiamų skaičių sumą.
// Rezultatas: 4 + 7 + 5 = 16

console.log('#~Trecias');

let numbers = [4, -2, 7, -1, 0, 5];
// let sumNumbers = 0;

// for (i = 0; i < numbers.length; i++) {
//     numbers[i] > 0 ? sumNumbers += numbers[i] : '';
// }

let sumNumbers = 0;
function addNumbers() {
    numbers.forEach(numb => {
        if (numb > 0) {
            sumNumbers = sumNumbers + numb;
        }
    });
    return sumNumbers;
}

console.log(addNumbers());

console.log('Rezultatas: ', sumNumbers);

// 4. Atrinkti masyvo elementus, kurie ilgesni nei 4 raidės:
//let zodziai = ["labas", "rytas", "tu", "as", "programavimas", "trys"];
//Atspausdinti konsolėje ilgų žodžių masyvą

console.log('#~Ketvirtas');

let zodziai = ["labas", "rytas", "tu", "as", "programavimas", "trys"];

let atrinktiZodziai = [];

for (let i = 0; i < zodziai.length; i++) {
    if (zodziai[i].length > 4) {
        atrinktiZodziai.push(zodziai[i]);
    }
}

console.log(atrinktiZodziai);

// 5. Sugeneruoti (atspausdinti konsolėje) tekstą: 15-14-12-11-10-9-8
// (atkrepkit dėmesį kad nėra '13')

console.log('#~Penktas');

let spauzdinam = "";

for (let i = 15; i > 7; i--) {
    if (i != 13) {
        spauzdinam += i + "-";
    }
}

console.log(spauzdinam.slice(0, -1));


//6.  Parašykite kodą, kuris suskaičiuos kiek kartų raidė 'a' arba 'A' pasikartoja duotame tekste.
// let tekstas  = 'Ar norėtum arbatos ar dar kavos.'

console.log('#~Sestas');

let tekstas = 'Ar norėtum arbatos ar dar kavos.';
let kiekA = 0;

for (let i = 0; i < tekstas.length; i++) {
    if (tekstas[i] === 'a' || tekstas[i] === 'A') {
        kiekA++;
    }
}

console.log('Musu tekstas turi: ', kiekA);
