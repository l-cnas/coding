// ARRAY
 
// Masyvas - tai re reikšmių rinkinys. Reikšmės vadinamos elementais.
// Reikšmės gali būti: skaičiai, stringai, loginės reikšmės (booleans), objektai, kiti masyvai.
// Masyvo elementai surūšiuoti pagal jų indeksą.
// Pirmasis elementas turi 0 indekse, antrasis – 1 ir taip toliau.
// Masyvai yra dinamiški - gali didėti arba mažėti, pridedant arba šalinant elementus.
 
// // ARRAY metodai
 
// // Metodai keičiantys pirminį masyvą
 
// // 1 -  .push(kaPridedame) - prideda elementus masyvo gale, galime vienu kartu pridėti kelis
 
// const arrayPush = [1, 2, 3, 4, 5];
// arrayPush.push(0, 'arbata');
// console.log(arrayPush); // [1, 2, 3, 4, 5, 0, 'arbata'];
 
// // 2 -  .pop() - ištrina 1 elementą masyvo gale
// const arrayPop = [1, 2, 3, 4, 5];
// console.log(arrayPop);
// arrayPop.pop();
// console.log(arrayPop); // [1, 2, 3, 4];
 
// // 3 -  .unshift(kaPridedame) - prideda elementus masyvo priekyje, galime vienu kartu pridėti kelis
// const arrayUnshift = [8, 9, 10, 11, 12];
// console.log(arrayUnshift)
// arrayUnshift.unshift(6, 7);
// console.log(arrayUnshift) // [6, 7, 8, 9, 10, 11, 12];
 
// // 4 -  .shift() - ištrina elementą masyvo priekyje
// const arrayShift = [17, 18, 19, 20];
// console.log(arrayShift);
// arrayShift.shift();
// console.log(arrayShift); // [18, 19, 20];

// // 5 -  .splice(kurPridedam, kiekTrinam, elementaiKuriuosPridedam) - prideda/ištrina elementus masyvo viduje
const arraySplice = [1, 2, 3, 4, 5, 6];
console.log(arraySplice);
 
arraySplice.splice(0, 0, 19);
console.log(arraySplice); // [19, 1, 2, 3, 4, 5, 6];
 
arraySplice.splice(5, 0, 'labas', 'rytas');
console.log(arraySplice); // [19, 1, 2, 3, 4, 5, 6];
 
// arraySplice.splice(0, 2, 'labas', 'rytas');
// console.log(arraySplice); //

for (let i = arraySplice.length - 1; i >= 0; i--) {
  if (arraySplice[i] === 'labas' || arraySplice[i] === 'rytas') {
    arraySplice.splice(i, 1);
  }
}

console.log(arraySplice);

// 5 -  .splice(kurPridedam, kiekTrinam, elementaiKuriuosPridedam) - prideda/ištrina elementus pirminio masyvo viduje (naujo masyvo nekūria)
 
// // .toSpliced() - veikia kaip .splice() bet nepakeičia pirminio masyvo o sukuria naują

// // Metodai nekeičiantys pirminio masyvo (sukuria naują masyvą);
 
// // patikrinimas ar objektas yra masyvas
// // Array.isArray(tikrinamas objektas) - patikrina ar objektas yra masyvas, grąžina true/false
// const randomArray = [1, 2, 'wfeoh', true, false, 56, 'weuf'];
// console.log(typeof randomArray); // object
// console.log(Array.isArray(randomArray)); // true
 
// // .slice(kurPradedam, ikiKurKerpam(neimtinai)) - iškerpa dalį masyvo
 
// let skaiciai = [-5, -4, -3, -2, -1, 0, 1, 2, 3];
// console.log(skaiciai);
 
// let teigiamiSkaiciai = skaiciai.slice(6, skaiciai.length);
// console.log(teigiamiSkaiciai); // [1, 2, 3]
 
// let neigiamiSkaiciai = skaiciai.slice(0, 5);
// console.log(neigiamiSkaiciai); // [-5, -4, -3, -2, -1]
 
// let skaiciaiKopija = skaiciai.slice(0, skaiciai.length);
// console.log(skaiciaiKopija); // [-5, -4, -3, -2, -1, 0, 1, 2, 3]
 
// // .concat() — sujungia 2 masyvus
// // masyvasPrieKurioPridedam.concat(ką pridedam)
 
// let naujiSkaiciai = neigiamiSkaiciai.concat(teigiamiSkaiciai);
// console.log(naujiSkaiciai); //[-5, -4, -3, -2, -1, 1, 2, 3]
// // let naujiSkaiciai = neigiamiSkaiciai.concat('labas');

// // Sukurti stringą iš masyvo
 
// // .toString() - konvertuoja masyvą į stringą
// let naujiSkaiciaiString = naujiSkaiciai.toString();
// console.log(naujiSkaiciaiString); // '-5,-4,-3,-2,-1,1,2,3'
 
// // .join(simbolisTarpElementų) - konvertuoja masyvą į stringą (vietoj , galim naudoti kitą simbolį)
// let naujiSkaiciaiStringNaujas = naujiSkaiciai.join(' / ');
// console.log(naujiSkaiciaiStringNaujas); // '-5 / -4 / -3 / -2 / -1 / 1 / 2 / 3'
 

// // Paieška masyve (nekeičia pirminio masyvo)
 
// // .indexOf() - grąžina pirmo rasto elemento indeksą
// let skaiciai2 = [ -3, -2, -1, -3, 0, 1, 2, 3, 0];
// console.log(skaiciai2); // [-5, -4, -3, -2, -1, 0, 1, 2, 3]
// console.log(skaiciai2.indexOf(-3)); // 0
 
// // .lastIndexOf() - grąžina paskutinio elemento indeksą
// console.log(skaiciai2.lastIndexOf(0)); // 8
 
// // .includes() - tikrina, ar masyve yra tam tikras elementas, grąžina true/false
// console.log(skaiciai2.includes(-2)); // true
 
// // Iteracija masyve- perėjimas per masyvo elementus
 
// // .forEach() - pereina per kiekvieną masyvo elementą, trumpesnė for ciklo versija
// //  sintaksė: array.forEach(function(element, index, array) {ką darom});
// // nesukuria naujo masyvo.
// // neveikia constinue ir break
 
// const skaiciaiLoop = [10, 20, 30, 40, 50];
// skaiciaiLoop.forEach(sk => console.log(sk * 2));
 
// let result = '';
// skaiciaiLoop.forEach(sk => {
//     result += sk * 2 + " ";
// });
 
// console.log(result.trimEnd());

// // .map() - pereina per kiekvieną elementą, pritaiko funkciją, iš funkcijos rezultatų sukuria naują masyvą
// // nekeičia pirminio masyvo
// // sintaksė .map(funkcija(element, index, array){ką darom})
 
// const skaiciaiLoopNeigiami = skaiciaiLoop.map(sk => - sk);
// console.log(skaiciaiLoopNeigiami);  // [-10, -20, -30, -40, -50]
 
// .filter() - pereina per kiekvieną elementą, patikrina ar elementas atitinka sąlygą // sukuria naują masyvą ir tų elementų kurie atitinka sąlygai // sukuria naują masyvą, nepakeičia pirminio masyvo cpnsole.log(skaiciaiLoop); // [10, 20, 30, 40, 50] let skaiciaiDaugiau30 = skaiciaiLoop.filter(sk => sk > 30); console.log(skaiciaiDaugiau30); // [40, 50]

// // Rūšiavimas
 
// // .sort() - rūšiuoja ir pakeičia masyvą (skaičius rūšiuoja kaip stringus jei nėra palyginimo finkcijos)
// let numbersSort = [1, -5, 25, 0, 14, -10, 102, -99];
// numbersSort.sort();
// console.log(numbersSort); // [-10, -5, -99, 0, 1, 102, 14, 25]
 
// numbersSort.sort((a, b) => a - b);
// console.log(numbersSort); // [-99, -10, -5, 0, 1, 14, 25, 102]
// numbersSort.sort((a, b) => b - a);
// console.log(numbersSort); // [102, 25, 14, 1, 0, -5, -10, -99]
 
// // .toSorted() - rūšiuoja ir sukūria naują masyvą (pirminio masyvo nepakeičia)

// // .toSorted() - rūšiuoja ir sukūria naują masyvą (pirminio masyvo nepakeičia)
 
// let numbersSortAscending = numbersSort.toSorted((a, b) => a - b);
// console.log(numbersSortAscending); // [-99, -10, -5, 0, 1, 14, 25, 102]
 
// let zodziaiLT = [ "ėglė", "ąžuolas", "česnakas", "žuvis", "šuo", "briedis", ];
// let zodziaiLtSorted = zodziaiLT.toSorted((a, b) => a.localeCompare(b, 'lt'));
// console.log(zodziaiLtSorted);

// // Masyvo apvertimas
// // .reverse() - apverčia masyvo elementus, pakeičią pirminį
// // .toReversed() - sukūria naują masyvą (apverčia elementus), nepakeičia pirminio masyvo
 
// let reverseArray = [100, 90, 80, 70, 60];
// console.log(reverseArray); // [100, 90, 80, 70, 60]
 
// let reverseArrayNaujas = reverseArray.toReversed();
// console.log(reverseArrayNaujas); // [60, 70, 80, 90, 100]
// console.log(reverseArray); // [100, 90, 80, 70, 60] - liko nepasikeitęs
 
 
// // Kada kokį metodą naudoti:
// // Pridėti elementą → push, unshift
// // Pašalinti elementą → pop, shift
// // Pridėti / pašalinti bet kurioje vietoje → splice
// // Kopijuoti masyvą (ar jo dalį) → slice
// // Ieškoti → indexOf, .lastIndexOf() , includes
// // Pereiti per masyvą (iteruoti) → for, forEach
// // Sukurti pakeistą (transformuotą) masyvą → map
// // Atrinkti tik tam tikrus elementus → filter
 
 