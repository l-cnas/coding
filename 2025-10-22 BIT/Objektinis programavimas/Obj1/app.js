// Sukurti klasę PiestukuDezute. Padaryti taip, kad į pieštukų dėžutę būtų galima pridėti pieštukų
// pvz ('red', 'blue', 'yellow' etc). Parašyti metodą, kuris atspausdina visus pieštukus

class PiestukuDezute {

    constructor() {
        this.piestukai = [];
    }

    add(piestukas) {
        this.piestukai.push(piestukas);
    }

    print() {
        this.piestukai.forEach(piestukas => {
            console.log(piestukas);
        });
    }
}

const dezute = new PiestukuDezute();

dezute.add('red');
dezute.add('blue');
dezute.add('yellow');

dezute.print();