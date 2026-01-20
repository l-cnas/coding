const A = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];

const B = [
    'Kalakutas',
    'Višta',
    'Antis',
    'Žąsis',
    'Ančiasnapis'
];

const C = [
    'Višta',
    'Gaidys',
    'Šernas',
    'Lapė',
    'Vilkas',
    'Šuo dingo',
    'Barsukas',
    'Voverė',
    'Šuo',
    'Naminis katinas',
    'Laukinis katinas',
    'Šuo atsirado',
    'Bebras',
    'Ožys'
];


const pirmas = document.querySelector('[data-pirmas]');
const antras = document.querySelector('[data-antras]');
const trecias = document.querySelector('[data-trecias]');

console.log(`radom ${pirmas}`)

// 1.

A.forEach(gyvunas => {
    const li = document.createElement('li'); // create <li>
    li.innerText = gyvunas;                // put text inside
    pirmas.appendChild(li);                  // add to <ul>
});

// 2.

A.sort((a, b) => a.localeCompare(b));

A.forEach(gyvunas => {
    const li = document.createElement('li'); // create <li>
    li.innerText = gyvunas;                // put text inside
    antras.appendChild(li);                  // add to <ul>
});


// 3.

const bendras = [...A, ...B];

bendras.sort((a, b) => a.localeCompare(b));

bendras.forEach(gyvunas => {
    const li = document.createElement('li');
    li.innerText = gyvunas;
    trecias.appendChild(li);
});

// 4. 

const ketvirtas = document.querySelector('[data-ketvirtas]');

A.forEach(gyvunas => {
    const div = document.createElement('div');
    div.classList.add('circle');
    div.innerText = gyvunas;
    ketvirtas.appendChild(div);
});


// 5.

const penktas = document.querySelector('[data-penktas]');

B.forEach(gyvunas => {
    const div = document.createElement('div');
    div.classList.add('red-circle');

    const raidziuSkaicius = gyvunas.length;

    div.innerText = `${gyvunas} (${raidziuSkaicius})`;

    penktas.appendChild(div);
});

// 6. 

const sestas = document.querySelector('[data-sestas]');

A.filter(gyvunas => !gyvunas.includes(' '))
    .forEach(gyvunas => {
        const div = document.createElement('div');
        div.classList.add('green-circle');
        div.innerText = gyvunas;
        sestas.appendChild(div);
    });

// 7.

const septintas = document.querySelector('[data-septintas]');

B.forEach(gyvunas => {
    gyvunas.split('').forEach(raide => {
        const span = document.createElement('span');
        span.classList.add('yellow-circle');
        span.innerText = raide;
        septintas.appendChild(span);
    });
});

// 8. 

const astuntas1 = document.querySelector('[data-astuntas1]');
const astuntas2 = document.querySelector('[data-astuntas2]');

C.forEach(gyvunas => {
    const li = document.createElement('li');
    li.innerText = gyvunas;

    if (gyvunas.length <= 6) {
        astuntas1.appendChild(li);
    } else {
        astuntas2.appendChild(li);
    }
});

// 9.

const devintas = document.querySelector('[data-devintas]');

B.filter(gyvunas => !gyvunas.toLowerCase().includes('šuo'))
    .forEach(gyvunas => {
        const li = document.createElement('li');
        li.innerText = gyvunas;
        devintas.appendChild(li);
    });

