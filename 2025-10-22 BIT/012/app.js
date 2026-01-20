console.log('Rytas');

let myVar1 = 54 + 2;

console.log(myVar1);

let myResultDiv = document.querySelector('.my-result');

myResultDiv.innerText = myVar1;
myResultDiv.style.fontSize = '30px';

let myH22 = document.querySelector('h2 + h2');

myH22.style.color = 'orange';

console.clear();

const A =11;
const B = 5;

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(A / B);
console.log(A % B);

console.log(9 % 2);
console.log(7 % 4);
console.log(8 % 4);

console.log(0.2 +0.4);

const S = 0.2 + 0.4;

myResultDiv.innerText = S.toFixed(2); //suformatavimas ir verimas i stinga

const myStr = '25';

const myNumb = parseInt(myStr); // stringa pakeicia i skaiciu

console.log(5 + myStr, 5 + myNumb);



let funNumber = 2;

funNumber++; // didinamas vienetu du pliusai prideda viena
funNumber++;


console.log(funNumber++);

console.log(funNumber); // 5

const what = funNumber++ * ++funNumber; // didinimas tudi didesni prioriteta, todel vyksta pirmas

console.log(what);


let bananas = 'bananas';

bananas++;

console.log(bananas);

let daug = 5 / 0;

console.log(daug, typeof daug);


const animal1 ='Bebras';
const action1 ='eina namo';

const animal1InAction1 = animal1 + ' ' + action1;

console.log(animal1InAction1);


console.log(animal1[3], animal1[0]);

console.log(animal1.length);

let kas;

console.log(kas);



// console.log(kur);
