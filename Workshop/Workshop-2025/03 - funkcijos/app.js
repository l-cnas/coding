console.log('-.-');

console.log('Hello Tuesday!');

function pasisveikinti() {
    console.log('Sveiki prisijunge');
}

pasisveikinti();

function pasisveikinti2(vardas) {
    console.log('Sveiki prisijunge ' + vardas);
}

pasisveikinti2('Bronius');

function pasisveikinti3(vardas) {
    console.log(`'Sveiki prisijunge ${vardas}'`);
}

pasisveikinti3('Bronius');


// Prisijungimas prie paskyros. 

// Patikrinti ar vartotojo vardas užregustruotas. Jei ne, konsolėje atspausdinti // "Toks vartotojas neegzistuoja"

// Patikrinti ar slaptažodis teisingas. Jei teisingas, konsolėje atspausdinti "Sveiki atvykę".

// Jei slaptažodis neteisingas, konsolėje atskžpausdinti "Slaptažodis ir vartotojo vardas neatitinka".

// Vartotojo vardas ir slaptažodis atsitiktinai yra true/false.

// Parašyti funkciją, kurį sukurtų ir patikrintų prisijungumo duomenis.


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


function paskyra() {
    let vartotojoVardas = rand(0, 1) ? true : false;
    console.log(` Vartotojo vardo reiksme ${vartotojoVardas}`);
    let slaptazodis = rand(0, 1) ? true : false;
    console.log(`Slaptazodzio reiksme ${slaptazodis}`);

    if (!vartotojoVardas) {
        console.log("Toks vartotojas neegzistuoja");
    } else {
        if (slaptazodis) {
            pasisveikinti();
        } else {
            console.log("Slaptažodis ir vartotojo vardas neatitinka");
        }
    }

}

paskyra();

// Parašykite funkciją, kuri gauna amžių ir parašo konsolėje ar žmogus yra pilnametis.

const pilnametis = amzius => (amzius >= 18) ? console.log('Pilnametis') : console.log('Nepilnametis');

// if (amzius >= 18) {
//     console.log('Pilnametis');
// } else {
//     console.log('Nepilnametis');
// }


pilnametis(17);
pilnametis(18);

console.clear();

const pilnametis3 = amzius => console.log((amzius >= 18) ? 'Pilnametis' : 'Nepilnametis');

pilnametis3(1);
pilnametis3(10);
pilnametis3(100);

// Parašykite funkciją, kuri: atspausdina „Lyginis“, jei duotas skaičius dalijasi iš 2;
// kitaip – „Nelyginis“.

const arLyginis = _ => console.log(_ % 2 === 0 ? 'Lyginis' : 'Nelyginis');

arLyginis(12);

let kmi = function (a, b) {
    return (a / ((b / 100) * (b / 100)));
}

console.log(kmi(136, 176));

function _(x, y) {
    return (x * y);
}

console.log(_(5, 5));

console.clear();

// 3. Sudėti du skaičius

// Sukurti funkciją sum(a, b), kuri grąžina a + b rezultatą.
 

let x = function(a, b) {
    return (a + b);
}

console.log(x(1, 2));

let x2 = x => x**2;

console.log(x2(11));

