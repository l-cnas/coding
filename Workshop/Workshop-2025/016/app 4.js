console.log('OOP');

class car {  // deklaruojam klesę
    constructor(brand, year) { //spec.funkcija, kuri pasileidžia visada 
        this.brand = brand;
        this.year = year;
    }

    getInfo() { // metodas, veiksmas kurį padaro objektas
        console.log(`${this.brand}, ${this.year}`)
    }
}

let myFirstCar = new car('Audi', 2005); // kūriam objektą

myFirstCar.getInfo();

// Sukurti klasę bankAccount (bankoSaskaita), 
// kuri turi 1 sąvybę - balance (saskaitosLikutis)

class bankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance){
            console.log(`You dont have enough money in your account`);
        } else {
            this.balance -= amount;
        }
    }

    getBalance() {
        console.log(`Jūsų saskaitoje šiuo metu yra ${this.balance} eur`);
    }
}

let swedAccount = new bankAccount(100);
swedAccount.getBalance(); 

swedAccount.deposit(50);
swedAccount.getBalance(); 

swedAccount.withdraw(20);
swedAccount.getBalance(); 

swedAccount.withdraw(131);
swedAccount.getBalance(); 

// Sukurti klasę Student. Sąvybės - (vardas, gimimo metai) bus priskirtos 
// objekto kūrimo metu. + sąvybę pažymiai (grades) - tuščias masyvas.  

console.log('-------------');

class Student {
    static count = 0
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
        this.grades = [];
        Student.count++;
    }

    static getStudentCount() {
        return Student.count;
    }

    addGrade(grade){
        this.grades.push(grade);
    }

    addGradeToFirstPlace(grade){
        this.grades.unshift(grade);
    }

    getHighestGrade() {
        return this.grades.length ? Math.max(...this.grades) : null;
    }

    getLowestGrade() {
        return this.grades.length ? Math.min(...this.grades) : null;
    }

    getAverage() {
        if (this.grades.length === 0) {
            console.log('Pažymių nėra');
        }

        let sum = 0;
        this.grades.forEach(grade => {
            sum += grade;
        })

        return (sum / this.grades.length).toFixed(2);
    }

    assignScolarship(){
        if (this.getAverage() >= 8 ) {
            console.log(`${this.name} is assigned higher scolarship`);
        } else if (this.getAverage() >= 6 ) {
            console.log(`${this.name} is assigned regular scolarship`);
        } else {
            console.log(`The average grade is too low, no scolarship for ${this.name} this semester`);
        }
    }
}

class onlineStudent extends Student {
    constructor(name, birthYear, platform) {
        super(name, birthYear); // iškviečiam Student constructor
        this.platform = platform;
    }

    getAverage() {
        return (super.getAverage() * 0.8).toFixed(2);
    }
}

let Aldona = new onlineStudent('Aldona', 2007, 'Zoom');
console.log(Aldona);  
Aldona.addGrade(7);
Aldona.addGrade(9);
Aldona.addGrade(10);


// sukurti metodą kuris vidurki * 0,8 gražina skaičių


let Petras = new Student('Petras', 2007);
console.log(Petras);

console.log(Student.getStudentCount());
Petras.addGrade(7);
Petras.addGrade(9);
Petras.addGrade(10);

console.log(Petras.getHighestGrade());
console.log(Petras.getLowestGrade());

console.log(Petras.getAverage());

Petras.assignScolarship();

console.log(Aldona.getAverage());
Aldona.assignScolarship();

//sukurti metodą kuris grąžintų pažymių vidurkį

///sukurti metodą assignScolarship()
// jei vidurkis 8 ir daugiau - stipendija padidinta 
// 6 - 8 paprasta stipendija 
// jei mažiau už 6 - jokios stipendijos 
// rezultatą išvesime į konsolę









