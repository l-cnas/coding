console.log('Hello Number Methods');
// NUMBER: sveikieji skaičiai, dešimtainiai skaičiai, NaN, Infinity, -Infinity

// Visi skaičių metodai grąžina naują reikšmę.
// Jie nekeičia pradinio skaičiaus.

// Number metodai tinka naudoti su:
// - skaičiais - pvz. 123,69;
// - kintamaisiais - pvz. let x = 123.69;
// - matematinėm išraiškom - pvz. (100 + 23);

// 1.  .toString() - paverčia skaičių į stringą

let a = (123.69).toString(); 

let x = 123.69;
let b = x.toString();

let c = (100 + 23.69).toString(); 

console.log(a, b, c); // '123' '123' '123'
console.log(typeof a, typeof b, typeof c); // string string string


// 2. Apvalinimas .toFixed(kiek skaičių po kablelio palikti) - apvalina, grąžina string'ą

console.log(8.345678.toFixed(2)); // 8,35
console.log(typeof 8.345678.toFixed(2)); // string


// 3. Apvalinimas .toPrecision(kiek skaičių palikti bendrai) - apvalina, grąžina string'ą

console.log(6.8765.toPrecision()); // 6.8765
console.log(6.8765.toPrecision(1)); // 7
console.log(6.8765.toPrecision(2)); // 6.9
console.log(6.8765.toPrecision(4)); // 6.877
console.log(6.8765.toPrecision(6)); // 6.87650
console.log(typeof 6.8765.toPrecision(6)); // string


// 4. Kintamojo vertimas į skaičių: 
// -  Number()
// -  parseFloat()
// -  parseInt()

// Number(value) - paverčia skaičiumi bet ką. Jei paversti nepavyksta → NaN.

console.log(Number("0.6"));    // 0.6
console.log(Number(true));        // 1
console.log(Number(false));     // 0
console.log(Number("123abc"));    // NaN
console.log(typeof Number("123abc")); //number
console.log(Number("10 20 30")); // NaN
console.log(typeof Number("10 20 30 ")); //number

// NaN = nėra skaičius, bet jo tipas yra number.

let kaina = 7.469856;
let kainaSuapvalinta = kaina.toFixed(2); // string

console.log(kainaSuapvalinta, typeof kainaSuapvalinta); // 7.47 string

let kainaSuapvalintaSkaicius = Number(kainaSuapvalinta); // number
console.log(kainaSuapvalintaSkaicius, typeof kainaSuapvalintaSkaicius); // 7.47 number 

console.log(kainaSuapvalinta + 5);
console.log(kainaSuapvalintaSkaicius + 5); 

let nesuapvalintas = 2.6978;

let suapvalintas = Number(nesuapvalintas.toFixed(2)); // 2.7 number
console.log(suapvalintas, typeof suapvalintas); // 2.7 number

// .parseInt() - grąžina sveikąjį (integer) skaičių
console.log(parseInt("-10.33")); // -10 
console.log(parseInt("10.33")); // 10
console.log(parseInt("10,8 20 30")); // 10
console.log(parseInt("10 years")); // 10 
console.log(parseInt("123abc")); // 123
console.log(parseInt("years 10")); // NaN
console.log(typeof parseInt("123abc")) // number 

// .parseFloat() - grąžina dešimtainį (decimal) skaičių
console.log(parseFloat("100.5")); // 100.5
console.log(parseFloat("10.33abc")); // 10.33
console.log(parseFloat("10.33 20 30")); // 10.33
console.log(parseFloat("10.5 years")); // 10.5
console.log(parseFloat("years 10")); // NaN
 

// 5. Skaičiaus (number) tikrinimo metodai (būtinai reikalauja argumento)

// Number.isNan(x) - patikrina ar skaičius yra NaN. Grąžina true/false
console.log(Number.isNaN(5/2)); // false
console.log(Number.isNaN(5/'duu')); // true

const nan = NaN;
if ( nan === NaN ) {
    console.log ('skaičius yra NaN');
} else {
    console.log ('skaičius nėra NaN');
}

console.log(Number.isNaN(nan)); // true
// if palyginimo būdas neveikia, reik naudoti Number.isNaN() metodą
// NaN nieka nėra lygus NaN

// Number.isInteger() - patikrina ar skaičius yra sveikasis, grąžiną true/false
console.log(Number.isInteger(9)) // true
console.log(Number.isInteger(9.99)); // false 

// Number.isSafeInteger() - patikrina ar skaičius gali būti saugomas kaip number ar reikia naudoti BigInt
console.log(Number.isSafeInteger(32569845)); // true
console.log(Number.isSafeInteger(67890123456789000)); // false

// Number.isFinite() - tikrina ar skaičius yra baigtinis (ar skaičius nėra NaN, Infinity, -Infinity)
// grąžina true / false 

console.log(10/5); // 2 
console.log(Number.isFinite(10/5)); // true

console.log(10/0); // Infinity
console.log(Number.isFinite(10/0)); // false 

console.log(-10/0); // -Infinity
console.log(Number.isFinite(-10/0)); // false 

console.log(10 * 'string'); // NaN
console.log(Number.isFinite(10 * 'string')); // false 

