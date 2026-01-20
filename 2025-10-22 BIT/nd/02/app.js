function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


console.log(rand(0, 100), 'nd 02');

let a1 = rand(1, 3);
let b1 = rand(1, 3);

const miniFun = function (a, b) {
    if (a < b) {
        return animal = 'Bebras'
    } else {
        if (a > b) {
            return animal = 'Barsukas'
        } else {
            return animal = 'Briedis'
        }

    }
};

console.log(miniFun(a1, b1));


// 2
const button1 = document.querySelector('button');
const btnEvent = document.querySelector('h2');


button1.addEventListener('click', function () {
    btnEvent.innerText = animal;
});


// 3. 


const grazinaRaides = function (_) {
    if (_.length > 3) {
        return (_[0] + _[1] + _[2]);
    } else {
        return _;
    }

}

console.log(grazinaRaides('bebras'), '-grazin is bebro');
console.log(grazinaRaides('haha'), '-grazina is haha');

// 4.

const ketvirtas = function (_) {
    if (_.length % 2 == 0) {
        return ('Simbolių skaičius lyginis');
    } else {
        return _[(Math.floor(_.length / 2))];
    }
}

console.log(ketvirtas('zodis'));

// 5.

const calc = function (a, b, c) {
    if (c == '*' && b == 0 || a == 0) {
        return 'Is nulio nesidaugina!';
    } else if (c == '/' && b == 0 || a == 0) {
        return 'Is nulio nesidalina!';
    } else if (c == '-') {
        return (a - b);
    } else if (c == '+') {
        return (a + b);
    } else if (c == '*') {
        return (a * b);
    } else if (c == '/') {
        return (a / b);
    }

}

console.log(calc(15, 3, '/'));


// 6.

function veiksmai(a, b) {
    const suma = a + b;
    const sandauga = a * b;
    const obj = {
        pirmas: a,
        antras: b,
        suma: suma,
        sandauga: sandauga
    };
    return obj;
}



console.log(veiksmai(2, 2));

// 7.

const kvadratas = document.querySelector('.kvadratas');

kvadratas.addEventListener('click', function () {
    if (kvadratas.style.backgroundColor == 'skyblue') {
        kvadratas.style.backgroundColor = 'crimson';
    } else {
        kvadratas.style.backgroundColor = 'skyblue';
    }
});

// 8. 


const button2 = document.querySelector('.antras');

button2.addEventListener('click', function () {
    let skaicius = Number(button2.innerText);
    let dideja = ++skaicius;
    button2.innerText = dideja;
});

// 9.

const h2Elementas = document.querySelectorAll('h2');

h2Elementas[1].style.color = 'black';

const button3 = document.querySelector('.trecias');

button3.addEventListener('click', function () {
    if (h2Elementas[1].innerText == '6') {
        return;
    }

    let h2Skaicius = rand(1, 6);

    h2Elementas[1].innerText = h2Skaicius;

    if (h2Skaicius != 6) {
        return h2Elementas[1].innerText = h2Skaicius;
    } else {
        h2Elementas[1].innerText = h2Skaicius;
        h2Elementas[1].style.color = 'red';
        h2Skaicius = h2Skaicius;
    }
});


// 10. 

const calc2 = function (a, b, c) {
    if (c == '*' && b == 0 || a == 0) {
        return 'Is nulio nesidaugina!';
    } else if (c == '/' && b == 0 || a == 0) {
        return 'Is nulio nesidalina!';
    } else if (c == '-') {
        return (a - b);
    } else if (c == '+') {
        return (a + b);
    } else if (c == '*') {
        return (a * b);
    } else if (c == '/') {
        return (a / b);
    }

}

console.log(calc2(15, 3, '/'));

const kalkuliatorius = document.querySelector('.kalkuliatorius');
const inputA = document.querySelector('.calcA');
const inputB = document.querySelector('.calcB');
const veiksmas = document.querySelector('.veiksmas');
const rezultatas = document.querySelector('.rezultatas');


kalkuliatorius.addEventListener('click', function () {
    let a = Number(inputA.value);
    let b = Number(inputB.value);
    let c = veiksmas.value;
    let ats = calc2(a, b, c);
    rezultatas.innerText = ats;
});

