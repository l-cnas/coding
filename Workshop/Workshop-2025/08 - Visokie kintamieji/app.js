// NUMBER: sveikieji skaičiai, dešimtainiai skaičiai, NaN, Infinity, -Infinity
 
// Visi skaičių metodai grąžina naują reikšmę.
// Jie nekeičia pradinio skaičiaus.
 
// Number metodai tinka naudoti su:
// - skaičiais - pvz. 123;
// - kintamaisiais - pvz. let x = 123;
// - matematinėm išraiškom - pvz. (100 + 23);
 
 
// 1.  .toString() - paverčia skaičių į stringą
 
let a = (123).toString();
 
let x = 123;
let b = x.toString();
 
let c = (100 + 23).toString();
 
console.log(a, b, c); // '123' '123' '123'
console.log(typeof a, typeof b, typeof c); // string string string
 