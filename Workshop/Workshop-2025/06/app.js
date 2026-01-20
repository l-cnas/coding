function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


// Sudėtingesnė užduotis : sukurti masyvą iš 10 atsitiktinių skaičiu
//  intervale nuo 0 iki 100. Mažiausią skaičių pakeisti į -5, 
// didžiausią į 120. Paskaičiuoti visų skaičių vidurkį 


let masyvukas = [];

for (i = 0; i < 10; i++) {
    masyvukas.push(rand(0, 100));
}

console.log(masyvukas, 'Supushinam 10 rng skaiciu.');

let maziausias = null;

for (let i = 0; i < masyvukas.length; i++) {
    if (null === maziausias) {
        maziausias = masyvukas[i];
    } else {
        if (maziausias > masyvukas[i]) {
            maziausias = masyvukas[i];
        }
    }
}

console.log(maziausias, 'sitas maziausias');

maziausias = -5;

console.log(maziausias, 'pakeitem i -5');

let didziausias = null;

for (let i = 0; i < masyvukas.length; i++) {
    if (null === didziausias) {
        didziausias = masyvukas[i];
    } else {
        if (didziausias < masyvukas[i]) {
            didziausias = masyvukas[i];
        }
    }
}

console.log(didziausias, 'sitas didziausias');

didziausias = 120;

console.log(didziausias, 'pakeitem i 120');

let visuSuma = 0;
let vidurkis = 0;

for (let i = 0; i < masyvukas.length; i++) {
    visuSuma += masyvukas[i];
}

console.log('Visu suma', visuSuma);
console.log('Vidurkis', visuSuma / masyvukas.length);


// 1. Sukurkite objektą apie žmogų 

// Sukurkite objektą zmogus su savybėmis: vardas, amzius, miestas.

// Atspausdinkite visus laukus konsolėje.

const zmogus = {
    vardas: 'Jonas',
    amzius: 25,
    miestas: 'Vilnius'
};

console.log(zmogus);


// 2. Pakeiskite objekto savybę 
// Turite objektą:
// let masina = { marke: 'Audi', metai: 2010 };
// Pakeiskite metai į 2020 ir pridėkite naują savybę spalva.
// Atspausdinkite atnaujintą objektą.

let masina = {
    marke: 'Audi',
    metai: 2010,
};
 
masina.metai = 2020;
masina.spalva = 'Juoda';
 
console.log(masina);
 

// 3. Objekte esantis masyvas
// Sukurkite objektą studentas su savybėmis:
// vardas
// pazymiai (masyvas su 5 skaičiais)
// Atspausdinkite konsolėje pirmą pažymį ir paskutinį pažymį.

let studentas = {
    vardas: 'Julius',
    pazymiai: [8, 9, 8, 10, 7]
}
 
console.log(studentas.pazymiai[0]);
console.log(studentas.pazymiai[studentas.pazymiai.length-1]);
 

// 4. Patikrinkite, ar savybė egzistuoja
// Turite objektą:
// let knyga = { pavadinimas: 'Harris Poteris', puslapiai: 500 };
// Patikrinkite, ar egzistuoja savybė autorius.
// Jei nėra — pridėkite su reikšme 'Nežinomas'.

let knyga = { 
    pavadinimas: 'Harris Poteris', 
    puslapiai: 500 
};

if (!knyga.autorius) {
    knyga.autorius = 'Nežinomas';
}

console.log(knyga);

// Masyvo elementų atvirkštinis išvedimas
// Turite masyvą:
// let gyvunai = ["šuo", "katė", "bebras"];
// Užduotis:
// Atspausdinkite masyvo elementus atvirkštine tvarka (bebras, katė, šuo).
 
let gyvunai = ["šuo", "katė", "bebras"];

for (let i = gyvunai.length - 1; i >=0; i--) {
    console.log(gyvunai[i]);

}