// Metodai atrodo taip: 
// value.method(argument);

let skaicius = 23.5689;
console.log(23.5689.toFixed(2)); // 23.57
console.log(skaicius.toFixed(2)); // 23.57 

// STRINGAI

// Stringas – kintamojo tipas (tekstas kabutėse: "Labas")
let string = 'afr135/#][';
// Pirminiai stringai nėra keičiami (stringai yra immutable) → metodai nekoreguoja originalo, o grąžina naują stringą.

// Stringų metodai padeda:
// - keisti tekstą,
// - ieškoti informacijos stringe,
// - iškirpti stringų dalis,
// - tvarkyti duomenis prieš siunčiant į backendą,
// - validuoti įvestis (pvz., email).
 

// 1. .length (savybė) - apskaičiuoja ir grąžina string'o ilgį
 
const pasisveikinimas = 'Labas rytas';
console.log(pasisveikinimas);

console.log(pasisveikinimas.length); // 11


// 2. Paieškos metodai

// a) .indexOf() - ieško pirmo ieškomo fragmento pradžios indekso
console.log(pasisveikinimas.indexOf('as')); // 3
 
// b) .lastIndexOf() - ieško paskutinio ieškomo fragmento pradžios indekso
console.log(pasisveikinimas.lastIndexOf('as')); // 9
 
// c) .include() - ieško argumento reikšmės (grąžina true/false)
console.log(pasisveikinimas.includes('rytas')); // true
console.log(pasisveikinimas.includes('Rytas')); // false
 
// d) .startsWith() - tikrina ar stringas prasideda argumento reikšme (grąžina true/false)
console.log(pasisveikinimas.startsWith('Labas')); // true
console.log(pasisveikinimas.startsWith('labas')); // false
 
// d) .endsWith() - tikrina ar stringas baigiasi argumento reikšme (grąžina true/false)
console.log(pasisveikinimas.endsWith('rytas')); // true
console.log(pasisveikinimas.endsWith('Rytas')); // false

// // .startsWith() ir .endsWith() yra labai naudingi tikrinant pvz:
// // - ar failo pavadinimas baigiasi .jpg
// // - ar URL prasideda https://
// // - ar sakinys prasideda specifine fraze


// 3. String'o (case) pakeitimo metodai:

console.log(pasisveikinimas);

// a) .toUpperCase() - pakeičia visas raides didžiosiomis
console.log(pasisveikinimas.toUpperCase());
 
// b) .toLowerCase() - pakeičia visas raides mažosiomis
console.log(pasisveikinimas.toLowerCase());


// 4. Teksto keitimo metodai
 
// a) .replace(ieškoma reikšmė, kuo keičiam) - suranda PIRMĄ ieškomą reikšmę ir ją pakeičia
console.log(pasisveikinimas.replace('rytas', 'vakaras')); // LabAS rytas
 
// b) .replaceAll(ieškoma reikšmė, kuo keičiam) - suranda visas ieškomas reikšmes ir jas pakeičia
console.log(pasisveikinimas.replaceAll('rytas', 'vakaras')); // LabAS rytAS

const pasisveikinimasVakare = pasisveikinimas.replaceAll('rytas', 'vakaras');
console.log(pasisveikinimasVakare); 

// 5. String'o dalių paėmimas

// slice(start, end) - Geriausias ir moderniausias būdas kirpti string'ą 
// substring(start, end)
// substr(start, length) - nebenaudojamas, bet dokumentacijoj sutiksit 


// // slice(start, end) - grąžina string'o dalį nuo start iki end (start įtraukiamas, end neįtraukiamas)

const diena = "Šiandien gera diena";
console.log(diena);
console.log(diena.slice(0, 8)); // 'Šiandien'

// Praleisite antrąjį parametrą (end), metodas iškirps likusią eilutės dalį:
console.log(diena.slice(8)); //' gera diena'

console.log(diena.slice(-3)); // priima neigiamą skaičių kaip argumentą (ir kerpa nuo galo)

console.log(diena.slice(-diena.length)); //Šiandien gera diena

function sum(a, b) {
    return a + b;
}

console.log(diena.slice(sum(6, 2))); // ' gera diena'

let kerpamPer2 = 2;
console.log(diena.slice(kerpamPer2)); // 'andien gera diena'

console.log(diena.slice(diena.indexOf('gera'))); //gera diena

// .substring(start, end) - veikia kaip .slice() bet nepriima neigiamų reikšmių
console.log(diena.substring(0, 8)); //'Šiandien'
console.log(diena.substring(8)); // ' gera diena'
// neigiamas reikšmes vertina kaip 0  
console.log(diena.substring(-3)); // 'Šiandien gera diena'

 
// 6. Teksto formatavimo metodai

const stringasTrim = '  Labas rytas   '
console.log(stringasTrim);

console.log(stringasTrim.endsWith('rytas')); // false 

// .trim() - nuima tarpus priekyje ir gale
console.log(stringasTrim.trim()); // 'Labas rytas'

console.log(stringasTrim.length);
console.log(stringasTrim.trim().length);

 
// .trimStart() - nuima tarpus priekyje
console.log(stringasTrim.trimStart()); // 'Labas rytas  '
 
// .trimEnd() - nuima tarpus gale
console.log(stringasTrim.trimEnd()); // '  Labas rytas'



// 7. Kūrimo / generavimo metodai

// Kartojimas .repeat(kiek kartų kartoti)

const kartoti = 'alio ';
console.log(kartoti);

console.log(kartoti.repeat(3)); // 'alio alio alio '

console.log(kartoti.repeat(3).trimEnd()); //'alio alio alio'

let pasisveikinti5kartus = pasisveikinimas.repeat(5);
console.log(pasisveikinti5kartus); 
 
// Generavimas - simbolių pridėjimas pradžioje ir gale
 
const agentas = '7'
console.log(agentas);
console.log(typeof(agentas)); 
 
// .padStart(kokio ilgio turi gautis stringas, kokie simboliai)
console.log(agentas.padStart(3, '0')); // 007
 
// .padEnd(kokio ilgio turi gautis stringas, kokie simboliai)
console.log(agentas.padEnd(5, 'N')); // 7NNNN
 

// 8. Stringų sujungimas 

// .concat() 
console.log(pasisveikinimas);
console.log(pasisveikinimas.concat('. ', 'Kaip sekasi?')); // Labas rytas. Kaip sekasi?
console.log(pasisveikinimas + '. ' + 'Kaip sekasi?'); // Labas rytas. Kaip sekasi? 


// 9. Stringo padalijimas ir įkėlimas į masyvą 
// Labai svarbu, nes stringas (ar jo dalys) paverčiamos masyvu ir galima naudoti masyvų metodus.

console.log(diena); 
//.split(per ką dalinam, limitas (kiek elementų masyve sukurti))
// padalija string'ą per nurodytą reikšmę, grąžina masyvą
console.log(diena.split(' ')); // dalinam per tarpą 
console.log(diena.split(' ', 2)); // dalinam per tarpą 
console.log(diena.split('')); // pasiėma kiekvieną stringo simbolį
console.log(diena.split('', 8)); // pasiėma 8 pirmuosius stringo simbolius
console.log(diena.length);

let siandien = [];
siandien = diena.split('', 8); //siandien yra masyvas , galim taikyti masyvų metodus 
console.log(siandien); 

console.log(diena.split('a')); // dalinam per 'a' raidę ('a' į masyvą neįtraukiama)

// Jei skiriamasis ženklas (argumentas) praleistas, grąžintame masyve bus visas stringas, su indeksu [0].
console.log(diena.split()); // ['Šiandien gera diena']

