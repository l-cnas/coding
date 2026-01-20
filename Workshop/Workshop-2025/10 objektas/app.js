// OBJECTS
 
const studentas = {
    name: 'Jonas',
    age: 18,
    isStudent: true,
    faculty: 'Tiksliųjų mokslų fakultetas',
    modul: 'Aukštoji matematika',
    languages: ['Lithuanian', 'English', 'German'],
    address: {
        city: 'Vilnius',
        street: 'Taikos pr.',
        buildingNr: 58
    },
    examResults: [98, 84, 76, 89, 93],
    introduce() {
        console.log(`Aš esu ${studentas.name}, man ${studentas.age} metų. Mano gimtasis miestas ${studentas.address.city}`);
    }
};
 
console.log(studentas);

// // 2 sintaksės būdai pasiekti objekto reikšmes:
// console.log(studentas.name);
// console.log(studentas["name"])

// // Objekto reikšmių koregavimas:
// studentas.age = 19;
// console.log(studentas);
 
// // Objekto reikšmių pridėjimas:
// studentas.email = 'jonas2007@gmail.com';
// console.log(studentas);
 
// // Objekto reikšmių ištrynimas:
// delete studentas.modul;
// console.log(studentas);

// // Objekto raktų egzistavimo patikrinimas
// console.log('name' in studentas); // true
// console.log('lastName' in studentas); // false

// // Metodas objekte - tai funkcija esanti objekto viduje (introduce())
// studentas.introduce();

// // Metodai
 
// // Object.keys(obj) → grąžina masyvą su raktų vardais
// console.log(Object.keys(studentas));
 
// // Object.values(obj) → grąžina masyvą su reišmių vardais
// console.log(Object.values(studentas));
 
// // Object.entries(obj) → grąžina masyvų masyvą su raktų/reikšmių  [key, value] poromis
// console.log(Object.entries(studentas));
 