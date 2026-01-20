const body = document.querySelector('body');

body.style.backgroundColor = 'black';

console.log('norisi miego');


// html injection


const section1 = document.querySelector('#nr1');

const divHtmlString = '<div class="circle1"></div>';

section1.innerHTML = divHtmlString;

const circle1 = document.querySelector('.circle1');

circle1.style.width ='100px';
circle1.style.height ='100px';
circle1.style.border = '1px solid white';
circle1.style.borderRadius = '50%';


// create element

const section2 = document.querySelector('#nr2');

const divCircle = document.createElement('div');

divCircle.style.width ='100px';
divCircle.style.height ='100px';
divCircle.style.border = '1px solid white';
divCircle.style.borderRadius = '50%';

section2.appendChild(divCircle);


//sekcija3

const section3 = document.querySelector('#nr3');

const Bebras = 'Bebras';
const Iguana = 'Iguana';

const fancyDiv = `
<div class="fancy">
    <div class="fancy2">
         <span>
            <b>${Bebras}</b>
            <i>${Iguana}</i>
        </span>
    </div>
</div>`;

section3.innerHTML = fancyDiv;


// Objektai

const namas1 = {}; // naujas tuscias objektas

namas1.langai = 3;
namas1.durys = 'Dideles';
namas1.arGeras = true;

namas1.kambariai = {};

namas1.kambariai.virtuve = '10m2';
namas1.kambariai.miegamasis = '30m2';

console.log(namas1);

const namas2 = {
    langai:4,
    durys:'Yra',
    arGeras: true,
    kamabariai:{
        virtuve: '10m2',
        miegamasis: '30m2'

    }
};

console.log(namas2);

const b1 = {
    vardas: 'Jonas',
    metai: 20
};

const b2 ={
    vardas: 'Jonas',
    metai: 20
};

const b3 = b2; // priskyrimas by reference.

if (b1 == b2) {
    console.log('bebrai vienodi');
} else {
    console.log('bebrai nevienodi')
};

b2.vardas = 'petras';

console.log(b1, b2, b3);

////////////////////

const sk1 = 521;

const sk2 = sk1; // by value;

let rez; // global scope

if (5>10) {
    let rez = 'Taip';
} else {
    let rez = 'Ne';
};

console.log(rez);