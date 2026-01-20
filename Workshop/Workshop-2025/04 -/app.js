function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let saugiklis = 1000;

// Emilija planuoja atostogas po 1 metų (12mėn). Šiam momentui kelionei pinigų neturi. 
// Kiekvieną mėn planuoja atsidėti (atsitiktinis skaičius) po 120 - 180 eur. 
// Paskaičiuoti kiek pinigų Emilija sutaupys po metų.

let atostoguFondas = 0;
let arNutikoKasBaisaus = 0;

for (let i = 0; i <= 12; i++) {
    atostoguFondas += rand(120, 180);
    if (rand(1, 99) >= 69) {
        atostoguFondas -= 100;
        arNutikoKasBaisaus += 1;
    }
    if (!saugiklis) {
        console.log('Sudeginom saugikli..');
        break;
    }

}

const nutiko = arNutikoKasBaisaus == 0 ? 'Nikeo nenutiko, taupeme neblogai, vaziuojam atostogu!!' : 'Buvo nutikimu, nieko daug nesutaupem, taupom toliau..';

console.log(atostoguFondas, '$ sutaupyta!', nutiko);

// 3. Spausdinti visus lyginius skaičius nuo 2 iki 10
// // Išveskite: 2 4 6 8 10

console.log('Trecias');

for (let i = 0; i <= 10; i++) {
    if (i != 0 && i % 2 == 0) {
        console.log(i);
    }
}

// 4. Spausdinti skaičių kvadratus nuo 1 iki 5

// // Išveskite: 1 4 9 16 25

console.log('Ketvirtas');

for (let i = 0; i <= 5; i++) {
    console.log(i * i);
}



// 5. Sudėti skaičius nuo 1 iki 10

// // Išveskite sumą: 55

console.log('Penktas');

let skaicius = 0;

for (let ii = 0; ii <= 10; ii++) {
    skaicius = skaicius + ii;
}

console.log(skaicius);

// 6. Kartoti tekstą kelis kartus

// // Spausdinti "Labas!" 5 kartus

console.log('Sestas')

// 7. Atspausdinti skaičius nuo 1 iki 10, bet tik jei jie didesni už 5
// // Išveskite: 6 7 8 9 10

console.log('Septintas');
for (let i = 0; i <= 10; i++) {
    i >= 5 ? console.log(i) : '';
}

// 8. Atvirkštinis kvadratų spausdinimas

// // Išveskite: 25 16 9 4 1

console.log('Astuntas');

for (let i = 0; i <= 5; i++) {
    console.log((5 - i) ** 2);
}

// 9. Sudėti tik lyginius skaičius nuo 1 iki 10
// // Išveskite sumą: 30

console.log('Devintas');

let suma = 0;

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        suma += i;
    }
}

console.log(suma);

// 10. Spausdinti skaičių su žodžiu

// // Išveskite: "Skaičius 1", "Skaičius 2", ... iki 5

console.log('Desimtas');

for (let i = 0; i <= 5; i++) {
    (i != 0 && i <= 5) ? console.log('Skaicius', i) : '';
}

console.clear();

// 3 kartus iš eilės išmesti tą patį skaičių (kauliukas)


let iskrito = 0;
let saugiklis2 = 1000;
let praejesMetimas = 0;
let kiekMetimu = 0;

do {
    let kauliukas = rand(1, 6);
    
    kiekMetimu += 1;
    saugiklis2--;

    if (kauliukas == praejesMetimas) {
        iskrito += 1;
        console.log(saugiklis2, `Iskrito ${iskrito} kartus!`)
    }
    else if (iskrito == 3) {
        console.log(`Pagaliau iskrito! Po ${kiekMetimu}`)
    } else {
        console.log('Nekrito', saugiklis2);
        iskrito = 0;
    }
    praejesMetimas = kauliukas;
    //Saugiklis
    if (!saugiklis2) {
        console.log('Sudeginom saugikli..');
        break;
    }

} while (iskrito != 3);