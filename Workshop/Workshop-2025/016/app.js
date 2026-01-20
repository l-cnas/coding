console.log('OOP');

class car { // deklaruojam klase
    constructor(brand, year) { // spec.funkcija, kuri pasileidžia visada
        this.brand = brand;
        this.year = year;
    }

    getInfo() { // metodas, veiksmas kurį padaro objektas
        console.log(`${this.brand}, ${this.year}`)
    }
}

let myFirstCar = new car('Audi', 2005); // kuriam objektą

myFirstCar.getInfo();


class BankAccount {
    constructor(money) {
        this.balance = money;
    }

    idetiPinigu(kiekis) {
        this.balance += kiekis;
    }

    isimtiPinigu(kiekis) {
        kiekis > this.balance ? console.log(`You broke bruh, in account only ${this.balance}`) : this.balance -= kiekis;
    }

    saskaitosLikutis() {
        this.balance == 0 ? console.log(`You broke.`) : console.log(`Jusus saskaitoje siuo metu yra ${this.balance} pnigu.`);
    }
}

let saskaita = new BankAccount(785533);

saskaita.saskaitosLikutis();
saskaita.isimtiPinigu(999999);





class Student {

    static count = 0;

    constructor(vardas, gimimoMetai) {
        this.vardas = vardas;
        this.year = gimimoMetai;
        this.grades = [];
        Student.count++;
    }


    static getStudentCount() {
        return Student.count;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    addGradeToFirstPlace(grade) {
        this.grades.unshift(grade);
    }

    getHighestGrade() {
        return this.grades.length ? Math.max(...this.grades) : null;
    }

    getLowestGrade() {
        return this.grades.length ? Math.min(...this.grades) : null;
    }

    getAverageGrade() {
        let sum = 0;

        for (let grade of this.grades) {
            sum += grade;
        }

        return (sum / this.grades.length).toFixed(2);
    }

    assignScholarship() {
        const avg = Number(this.getAverageGrade());

        if (avg >= 8) {
            console.log('Padidinta stipendija');
        } else if (avg >= 6) {
            console.log('Paprasta stipendija');
        } else {
            console.log('Stipendijos nėra');
        }
    }

    avgGradeT08() {
        return (this.getAverageGrade() * 0.8);
    }

}


class onlineStudent extends Student {

    constructor(name, birthYear, platform) {
        super(name, birthYear); // cia iskviecia super is tevines klases musu student
        this.platform = platform;
    }

    getAverageGrade() {
        return (super.getAverageGrade() * 0.8).toFixed(2);
    }

}

let Aldona = new onlineStudent('Aldona', 2007, 'Zoom');
console.log(Aldona);
Aldona.addGrade(5);
Aldona.addGrade(7);
Aldona.addGrade(10);

console.log(`${Aldona.getAverageGrade()} Aldonos pazimys`)



console.log(`${Student.getStudentCount()} Studentas`);

let Petras = new Student('Petras', 2007);
console.log(Petras);

Petras.addGrade(6);
Petras.addGrade(6);
Petras.addGrade(9);
Petras.addGrade(10);
console.log(Petras);

console.log(Petras.getHighestGrade());
console.log(Petras.getLowestGrade());
console.log(Petras.getAverageGrade());
console.log(Petras.assignScholarship());

console.log(`${Student.getStudentCount()} Studentas`);

console.log(Petras.avgGradeT08(), `yra 0.8 pazymio`);

