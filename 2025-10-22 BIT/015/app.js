console.log("Functions are they fun?");

console.log('top');

if (true) {
    console.log('If');
}

function fun1() {   /// Funkcijos deklaracija
    console.log('block');
}

console.log('bottom0');

fun1();
console.log('Bottom1');
fun1();
console.log('Bottom2');
fun1();

function fun2() {   /// Funkcijos deklaracija
    console.log('%cFancy', ' color:skyblue;letter-spacing:px');
}

fun2();
fun2();

/// anonimine funkcija
const fun3 = function () {
    console.log('%cFancy', ' color:crimson;letter-spacing:px');
}

fun3();
fun3();

const fun4 = function () {
    console.log('Button clickas');
    const h2 = document.querySelector('h2');
    h2.innerText = 'fun fun fun!';
}


const button1 = document.querySelector('#nr1');

button1.addEventListener('click', fun4); // kai clikc ant button1, tai paleidzia funkcija.



const fun5 = function () {
    console.log('%cTrue', ' color:darkgreen;font-size:15px');
}

const fun6 = function () {
    console.log('%cFalse', ' color:crimson;font-size:15px');
}

if (5 > 6) {
    fun5();
} else {
    fun6();
}

let pirmas = 2;
let antras = 5;

const fun7 = function () {
    console.log(pirmas * antras);
}

fun7();


let pirmasArgumentas = 2;
let antrasArgumentas = 5;

const fun77 = function (pirmasArgumentas, antrasArgumentas) {
    console.log(pirmasArgumentas * antrasArgumentas);
}

fun77(pirmasArgumentas, antrasArgumentas);

fun77(8, 10);


const nr2 = document.querySelector('#nr2');
const nr3 = document.querySelector('#nr3');

const fun8 = function (sk1, sk2) {
    const rez = sk1 * sk2;
    return rez;
}

nr2.innerText = fun8(5, 3);

const rez1 = fun8(5, 2);
nr3.innerText= rez1;

// parasyti funkcija kuri gauna du skaicius ir grazina didesni skaiciu. grazinta skaiciu atspauzdinti consoleje. 

let skaiciuks1 = 1;
let skaiciuks2 = 2;
let atsakymas;

if (skaiciuks1 < skaiciuks2) {
    atsakymas = skaiciuks2;
} else if (skaiciuks1 > skaiciuks2) {
    atsakymas = skaiciuks1;
};

const skaiciukai = function() {
    console.log(atsakymas);
}

const fun9 = function(sk1,sk2) {
    if (sk1 > sk2) {
        return sk1;
    }
    return sk2;
}

const fancyFun = (sk1, sk2) => sk1 > sk2 ? sk1 : sk2; //arrow function + ternary, bet sake ne siandiena.

console.log(fun9(11, 22));
console.log(fun9(11, 2));

nr2.innerText = fun9(11, 2);


// parasyti funkcija, katra gauna du stringus ir grazina ilgesni. grazinta stringa atspauzdinti konsoleje.


const fun10 = function(b1, b2) {
    if (b1.length > b2.length){
        return b1;
    }
    return b2;
}

console.log(fun10('bebras', 'barsukas'));