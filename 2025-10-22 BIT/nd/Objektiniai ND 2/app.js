console.log('Well helo there my friends!');
console.log('Task One: The Objective programming strikes.');

class Marsas {
    constructor(id, pavadinimas) {
        this.id = id;
        this.pavadinimas = pavadinimas;
    }

    static palydovai = [];
    static kiekKartuKviesta = 0;

    static randomId() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    static pridetiPalydova() {
        this.kiekKartuKviesta++;

        if (this.palydovai.length === 0) {
            const deimas = new Marsas(this.randomId(), "Deimas");
            this.palydovai.push(deimas);
            return deimas;
        }

        if (this.palydovai.length === 1) {
            let id;

            do {
                id = this.randomId();
            } while (id === this.palydovai[0].id);

            const fobas = new Marsas(id, "Fobas");
            this.palydovai.push(fobas);
            return fobas;
        }

        const randomIndex = Math.floor(Math.random() * 2);
        return this.palydovai[randomIndex];
    }
}

const results = [];
for (let i = 0; i < 5; i++) {
    results.push(Marsas.pridetiPalydova());
}

console.log("All returns:");
results.forEach((obj, i) => {
    console.log(i + 1, obj.pavadinimas, obj.id);
});

console.log("Unique IDs:", new Set(results.map(o => o.id)));

console.log('--- --- --- ---');
console.log('Task two: Return of the Cup!');
