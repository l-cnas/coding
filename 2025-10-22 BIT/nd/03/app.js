function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log('Pirmas uzdavinys');

// 2.

console.log('Antras uzdavinys');

const divAntras = document.querySelector('#antraUzduotis');

for (let i = 0; i < 44; i++) {
    let skaicius = rand(14, 44);
    if (skaicius % 4 === 0) {
        divAntras.innerHTML += `<span style="color:red">${skaicius}</span> `;
    } else {
        divAntras.innerHTML += `<span style="color:blue">${skaicius}</span> `;
    }
};

// 3.

console.log('Trecias uzdavinys');

const divTrecia = document.querySelector('#treciaUzduotis');
divTrecia.style.display = 'flex';

let tekstas = 0;

for (let i = 0; i < 14; i++) {
    let apskritimas = document.createElement('div');
    apskritimas.style.width = '25px';
    apskritimas.style.height = '25px';
    apskritimas.style.borderRadius = '50%';
    apskritimas.style.background = 'skyblue';
    apskritimas.style.margin = '5px';
    apskritimas.innerText = ++tekstas;

    divTrecia.appendChild(apskritimas);

};

// 4.

console.log('Ketvirtas uzdavinys');

const ketvirtaUzduotis = document.querySelector('#ketvirtaUzduotis');
ketvirtaUzduotis.style.display = 'flex';

let tekstas2 = 0;


for (let i = 0; i < 8; i++) {
    let apskritimas = document.createElement('div');
    let spalva = '';
    i % 2 == 0 ? spalva = 'skyblue' : spalva = 'red';
    apskritimas.style.width = '35px';
    apskritimas.style.height = '35px';
    apskritimas.style.borderRadius = '50%';
    apskritimas.style.background = spalva;
    apskritimas.style.margin = '5px';
    apskritimas.innerText = ++tekstas2;

    ketvirtaUzduotis.appendChild(apskritimas);

};

// 5. 

console.log('Penktas uzdavinys');

const penktaUzduotis = document.querySelector('#penktaUzduotis');
penktaUzduotis.style.display = 'flex';
penktaUzduotis.style.flexDirection = 'column';
penktaUzduotis.style.alignItems = 'center';

for (let i = 4; i <= 14; i++) {
    let lentele = document.createElement('div');
    let daugyba = 4 * i;
    lentele.innerText = `4 x ${i} = ${daugyba}`;

    penktaUzduotis.appendChild(lentele);
};

// 6. sestaUzduotis

console.log('Sestas uzdavinys');

const sestaUzduotis = document.querySelector('#sestaUzduotis');
sestaUzduotis.style.display = 'flex';
sestaUzduotis.style.flexDirection = 'column';
sestaUzduotis.style.alignItems = 'center';

let simboliuKiekis = 0;
let eilutesIlgis = 0;

let line = document.createElement('div');

while (simboliuKiekis < 444) {
    line.innerText += '*';
    simboliuKiekis++;
    eilutesIlgis++;


    if (eilutesIlgis == 44 || simboliuKiekis == 444) {
        sestaUzduotis.appendChild(line);
        line = document.createElement('div');
        eilutesIlgis = 0;
    }
};


// 7. septintaUzduotis

console.log('Septintas uzdavinys');

const septintaUzduotis = document.querySelector('#septintaUzduotis');
let kvadratasDydis = 200;
let matroska = septintaUzduotis;

for (i = 0; i < 14; i++) {
    kvadratasDydis -= 10;

    let kvadratas = document.createElement('div');

    let kvadratasSpalvaRng = rand(100, 999);
    kvadratas.style.width = `${kvadratasDydis}px`;
    kvadratas.style.height = `${kvadratasDydis}px`;
    kvadratas.style.display = 'flex';
    kvadratas.style.alignItems = 'center';
    kvadratas.style.justifyContent = 'center';
    kvadratas.style.backgroundColor = `#${kvadratasSpalvaRng}${kvadratasSpalvaRng}`;

    matroska.appendChild(kvadratas);
    matroska = kvadratas;
};

// 8. astuntaUzduotis

console.log('Astuntas uzdavinys');

const astuntaUzduotis = document.querySelector('#astuntaUzduotis');
astuntaUzduotis.style.display = 'flex';
astuntaUzduotis.style.flexDirection = 'column';
astuntaUzduotis.style.alignItems = 'center';

let simboliu = 0;
let simboliuEilute = 0;

let line2 = document.createElement('div');

while (simboliu < 41 * 41) {
    line2.innerHTML += '&#9632;';
    line2.style.color = 'green';
    line2.style.lineHeight = '9px';
    simboliu++;
    simboliuEilute++;


    if (simboliuEilute == 41) {
        astuntaUzduotis.appendChild(line2);
        line2 = document.createElement('div');
        simboliuEilute = 0;
    }
};

// 9. devintaUzduotis

console.log('Devintas uzdavinys');

const devintaUzduotis = document.querySelector('#devintaUzduotis');
devintaUzduotis.style.display = 'flex';
devintaUzduotis.style.flexDirection = 'column';
devintaUzduotis.style.alignItems = 'center';

let simboliu2 = 0;
let simboliuEilute2 = 0;
let eilute = 0;
let stulpelis = 0;

let line3 = document.createElement('div');

while (simboliu2 < 41 * 41) {

    if (stulpelis === eilute || stulpelis === 40 - eilute) {
        line3.innerHTML += '<span style="color: yellow">&#9632;</span>';
    } else {
        line3.innerHTML += '&#9632;';
        line3.style.color = 'green';
    }

    line3.style.lineHeight = '9px';
    simboliu2++;
    simboliuEilute2++;
    stulpelis++;

    if (simboliuEilute2 == 41) {
        devintaUzduotis.appendChild(line3);
        line3 = document.createElement('div');
        simboliuEilute2 = 0;

        stulpelis = 0;
        eilute++;
    }
};