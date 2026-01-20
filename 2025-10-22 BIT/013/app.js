const body = document.querySelector('body');

body.style.backgroundColor = 'black';

console.log('Good day mr If');

//Loginis Boolean

const taip = true;
const ne = false;

console.log(taip, typeof taip);
console.log(ne, typeof ne);

const bebras = 'bebras'; //true
const nieko = ''; //false

/*

Neigimas !
Arba ||
Ir &&

*/

console.log('!taip', !taip);
console.log('!ne', !ne);
console.log('!!taip', !!taip);
console.log('!!ne', !!ne);

console.log('!bebras', !bebras);
console.log('!!bebras', !!bebras);
console.log('!!nieko', !!nieko);

if (bebras) {
    console.log('TAIP');
} else {
    confirm.log('NE');
}

if (nieko) {
    console.log('TAIP');
} else {
    confirm.log('NE');
}

if (5 > 13) {
    console.log('TAIP');
} else {
    confirm.log('NE');
}

// > daugiau
// < maziau
// >= daugiau arba lygu
// <= maziau arba lygu
// == lygu 
// === grieztai lygu

const sk1 = -124;
const sk2 = 0;
const sk3 = NaN;
const sk4 = Infinity;

console.log(!!sk1, !!sk2, !!sk3, !!sk4);


// sk2 dabar constanta, didint negalima -erroras
// todel keiciam i let
if (++sk2) {
    console.log('TAIP');
} else {
    confirm.log('NE');
}

const animalInput = document.querySelector('input');
animalInput.style.border = '1px solid skyblue';

animalInput.addEventListener('input', _ => {
    confirm.log('Raso!', animalInput.value);
    if (animalInput.value.length > 7) {
        animalInput.style.border = '1px solid crimson';
    } else {
        animalInput.style.border = '1px solid skyblue';
    }
});


if (5 > 11) {
    console.log('Saka 1');
} else if (5 == 11) {
    console.log('Saka 2');
} else {
    console.log('Saka 3');
}

console.clear(); //clearinam console.

console.log('true || true', true || true);
console.log('true || false', true || false);
console.log('false || true', false || true);
console.log('false || false', false || false);
 
console.log('true && true', true && true);
console.log('true && false', true && false);
console.log('false && true', false && true);
console.log('false && false', false && false);
 
if (5 > 10 || 10 > 3) {
    console.log('Taip');
}  else {
    console.log('Ne');
}

if (5 > 10 && 10 > 3) {
    console.log('Taip');
}  else {
    console.log('Ne');
}