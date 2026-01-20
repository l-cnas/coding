// "Bebras nori banano" kiek yra a raidžių?

const bebroBananas = 'Bebras nori banano';
let kiekA = 0;

for (i = 0; i <= bebroBananas.length; i++) {
    if (bebroBananas[i] == 'a') {
        kiekA++;
    }
}

console.log(kiekA);

// "Bebras nori banano" sukurti masyvą, kurio elementai sakinio raidės ir tarpai

const beborMasyvas = [];

for (i = 0; i <= bebroBananas.length; i++) {
    beborMasyvas.push(bebroBananas[i]);
}

console.log(beborMasyvas);

// "Bebras nori banano" sukurti masyvą, kurio elementai sakinio raidės ir tarpai, a raidžių nedėti

const bobrMasyvasBeA = [];

for (i = 0; i <= bebroBananas.length; i++) {
    if (bebroBananas[i] != 'a') {
        bobrMasyvasBeA.push(bebroBananas[i]);
    }
}

console.log(bobrMasyvasBeA);

// suskaičiuoti skaičių sumą

const masyvas = [
    45,
    87,
    'a',
    32,
    74,
    53
];

let visaSuma = 0;

for (let i = 0; i < masyvas.length; i++) {
    if (typeof masyvas[i] == 'number') {
        visaSuma += masyvas[i];
    }
}

console.log(visaSuma);


// suskaičiuoti skaičių sumą (visų)

const masyvas2 = [
    '45',
    87,
    32,
    '74',
    53
];

let visaSuma2 = 0;

for (let i = 0; i < masyvas2.length; i++) {
        visaSuma2 += parseFloat(masyvas2[i]);
}

console.log(visaSuma2, 'cia antras');

//<!-- užpildyti h2 po lygybės -->

let h2Tag = document.querySelectorAll('h2');

console.log(h2Tag);

h2Tag[2].innerText = Number(h2Tag[0].innerText) + Number(h2Tag[1].innerText);

//<!-- X pajeisti atitinkamu skaičiumi -->

let h3Tag = document.querySelectorAll('h3');

console.log(h3Tag);

h3Tag[1].innerText = Number(h3Tag[2].innerText) - Number(h3Tag[0].innerText);


const btn = document.querySelector('#nr1');

btn.addEventListener('click', function() {
    console.log(btn.innerText);
});
