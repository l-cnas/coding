function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


// Gabija nori važiuoti į kelionę už 2150 eur. Šiam momentui turi 320 eur
// Per mėn planuoja atidėti 120-180 eur (atsitiktinis skaičius).
// Paskaičiuoti per kiek mėn Gabija sutaupys kelionei.

const atostoguTikslas = 2150;
const minAtideti = 120, maxAtideti = 180;
let kaupiamMin = 320, kaupiamMax = 320, kaupiamAvg = 320;
let kiekTruks = 0, minTruks = 0, maxTruks = 0;
let gyvenimasHitsTheFan = rand(minAtideti, maxAtideti);


while (kaupiamMin <= atostoguTikslas || kaupiamMax <= atostoguTikslas || kaupiamAvg <= atostoguTikslas) {
    if (kaupiamMin<= atostoguTikslas) {
        kaupiamMin += minAtideti;
        minTruks += 1;
    } else if (kaupiamMax<= atostoguTikslas) {
        kaupiamMax += maxAtideti;
        maxTruks += 1;
    } else if (kaupiamAvg<= atostoguTikslas) {
        kaupiamAvg += gyvenimasHitsTheFan;
        kiekTruks += 1;
    }
};

console.log(`Vidutiniskai uztruks ${kiekTruks} sukaupsim - ${kaupiamAvg},\n minimum - ${minTruks} sukaupsim ${kaupiamMin},\n ir max uztruks ${maxTruks} sukaupsim ${kaupiamMax}.`);



// 1. Prie skaičiaus x pridėti po 5, kol skaičius pasieks bent 200
// Pradėkite nuo:
// let x = 0;

console.log('Pirma uzd.');

let x = 0;
while (x < 200) {
    x += 5;
};

console.log(x);