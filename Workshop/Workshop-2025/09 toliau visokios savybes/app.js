// MATH metodai:
 
// Sintaksė: Math.method(number)
// Nepakeičia pirminio skaičiaus. Metodas paima reikšmę → atlieka skaičiavimus → grąžina rezultatą.
// Math metodai tinka naudoti su:
// - skaičiais - pvz. 123,69;
// - kintamaisiais - pvz. let x = 123.69;
// - matematinėm išraiškom - pvz. (100 + 23);
 
 
// // 1. Apvalinimas iki sveikojo skaičiaus:
 
// // a) Math.round() - suapvalina iki artimiausio sveikojo skaičiaus
// console.log(Math.round('7.5')); // 8
// console.log(Math.round(7.4)); // 7
// console.log(Math.round(-7.5)); // -7
 
// // b) Math.ceil() - suapvalina skaičių į didesnę pusę
// console.log(Math.ceil(5.01)); // 6
// console.log(Math.ceil(-5.01)); // -5
 
// // c) Math.floor() - suapvalina skaičių į mažesnę pusę
// console.log(Math.floor(3.01)); // 3
// console.log(Math.floor(-3.01)); // -4
 
// // d) Math.trunc() - grąžina (neapvalina) sveikajį skaičiaus dalį
// console.log(Math.trunc(8.01)); // 8
// console.log(Math.trunc(8.99)); // 8
// console.log(Math.trunc(-8.99)); // -8
 
// // 2. Patikrinimas ar skaičius teigiamas/neigiamas/0  -  Math.sign()
// // grąžina skaičių -1 / 0 / 1
 
// console.log(Math.sign(10));     // 1
// console.log(Math.sign(-5));     // -1
// console.log(Math.sign(0));      // 0
 
// console.log(Math.sign('55'));   // 1
// console.log(Math.sign('55abc'));  // NaN
// console.log(typeof Math.sign(10)); // number
 
// // 3. Maksimumo ir minimumo paieška
// // a) Math.max() - grąžina didžiausią iš tikrinamų skaičių (argumentų)
 
// console.log(Math.max(0, 4, -8, 15, -17, 18 )); // 18
// console.log(Math.max()); // -Infinity
 
// // b) Math.min() - grąžina mažiausią iš tikrinamų skaičių (argumentų)
 
// console.log(Math.min(102, 18, -45, 0, 68, -210)); // -210
// console.log(Math.min()); // Infinity
 
// console.log(Math.min('2', 14, '-15', '48')); // -15
// console.log(Math.min('2', 14, '-15', '48abc')); // NaN

// // 4. Atsitiktinių skaičių generavimas
// // Math.random() - grąžina atsitiktinį skaičių nuo 0(imtinai) iki 1 (imtinai)
 
// console.log(Math.random()); // 0 >= && <= 1  
 
// console.log(Math.floor(Math.random() * 10 + 1)); //grąžina sveikąjį atsitiktinį skaičių nuo 1 (imtinai) iki 10(imtinai)
 
// function rand(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
// }
 
// // 4. Skaičiaus absoliuti reikšmė (modulis) – tai skaičiaus dydis be ženklo.
// // Math.abs() - grąžina absoliučią skaičiaus reikšmę
 
// console.log(Math.abs(-3.58)); // 3.58
// console.log(Math.abs(3.58)); // 3.58
// console.log(Math.abs(0)); // 0
// console.log(Math.abs()); // NaN
// console.log(Math.abs('14')); // 14
// console.log(Math.abs('14abc')); // NaN
 

// // 5. Laipsniai ir šaknys
// // a) Math.pow(skaicius, laipsniu) - pakelia skaičių laipsniu
 
// console.log(Math.pow(2, 4)); // 16
// console.log(Math.pow(-4, 3)); // -64
 
// // b) Math.sqrt() - grąžina kvadratinę šaknį
 
// console.log(Math.sqrt(25)); // 5
 
// // b) Math.cbrt(x) - grąžina kubinę šaknį
 
// console.log(Math.cbrt(27)); // 3