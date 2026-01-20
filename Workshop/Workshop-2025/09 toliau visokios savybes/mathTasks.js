// 10 MEDIUM-LEVEL Math Tasks

// 1. Apskaičiuoti nuolaidą (su suapvalinimu iki 2 skaičių po kablelio)
// Turime kainą 79.99€ ir nuolaidą 17%.
// Apskaičiuok galutinę kainą, apvalindamas iki 2 skaičių po kablelio.
// Naudoti: Math.round() arba toFixed() + Number()

// 2. Tiksliai apskaičiuoti kūno masės indeksą (BMI)

// Duota: masė = 82.3 kg, ūgis = 1.76 m.
// BMI = masė / ūgis²
// Šaknį arba laipsnį kelti su Math.pow().
// Rezultatą suapvalinti iki 1 skaičiaus.

// 3. Sugeneruoti 3 atsitiktinius skaičius (1–50) ir rasti didžiausią

// Panaudoti:
// Math.random()
// Math.floor()
// Math.max()

// 4. Sugeneruoti atsitiktinę temperatūrą (−20 iki +20)

// Temperatūrą suapvalinti iki sveiko skaičiaus ir parašyti:
// jei teigiama → “šilta”
// jei neigiama → “šalta”
// jei 0 → “neutralu”
// Naudoti: Math.sign() ir Math.round()

// 5. Telefono baterijos simuliacija

// Sugeneruoti atsitiktinį baterijos lygį 0–100%.
// Jei < 20 → “Krauti bateriją”
// Jei 20–80 → “Viskas gerai”
// Jei > 80 → “Beveik pilna”
// Naudoti: random + logika, Math nėra sudėtingas, bet pats scenarijus realus.

// 6. Apskaičiuoti kelionės kainą pagal nuvažiuotus km

// Dienos tarifas:
// pirmi 10 km → 0.50 €/km
// 10 km → 0.30 €/km
// Duoti km = 18.4
// Naudoti Math.floor() ir Math.round() galutinei sumai iki 2 skaitmenų.

// 7. Rasti artimiausią sveiką skaičių, kuris dalinasi iš 7

// Duotas skaičius: 52.3
// Rasti:
// suapvalintą žemyn → artimiausias mažesnis, dalinantis iš 7 
// suapvalintą aukštyn → artimiausias didesnis, dalinantis iš 7
// Naudoti: Math.floor(), Math.ceil()

// 8. Apskaičiuoti įmoką per mėnesį (mini paskolos užduotis)

// Suma = 1200 €
// Metinės palūkanos = 12%
// Mėnuo = 1/12 metų
// Įmoka = suma * (palūkanos per mėnesį)
// Suapvalinti iki 2 skaičių.

// 9. Normalizuoti skaičių į intervalą 0–1

// Duotas skaičius: 78, minimalus 0, maksimalus 100.
// Formulė:
// norm = (value - min) / (max - min)
// Suapvalinti iki 3 skaitmenų.

// 10. Žaidimo kauliukas: išmesti du kauliukus ir apskaičiuoti sumą

// Simuliuok:

// Kauliukas A: random 1–6
// Kauliukas B: random 1–6
// Suma
// Jei suma > 8, laimėjai; kitaip pralaimėjai.
// Naudoti: Math.random(), Math.floor(), Math.max() nėra būtinybės, bet galima naudoti bonusui.