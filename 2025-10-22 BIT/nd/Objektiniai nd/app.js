// 1. 

class kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log(`Akemnu pririnkta: ${this.akmenuKiekis}`)
    }

}

const kibiras = new kibiras1();

kibiras.prideti1Akmeni();
kibiras.kiekPririnktaAkmenu();
kibiras.pridetiDaugAkmenu(55);
kibiras.kiekPririnktaAkmenu();

// 2. + 6.

console.log(`\n Antras ir sestas uzdaviniai.`)

class pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        this.kiekPopieriniu = 0;
        this.kiekMetaliniu = 0;
    }

    ideti(kiekis) {
        kiekis <= 2 ? this.metaliniaiPinigai += kiekis : this.popieriniaiPinigai += kiekis;
        kiekis <= 2 ? this.kiekMetaliniu += kiekis : this.kiekPopieriniu += kiekis;
    }

    skaiciuoti() {
        console.log(`Is viso pinigu: ${(this.metaliniaiPinigai + this.popieriniaiPinigai)}`)
    }

    monetos() {
        console.log(`Pinigineje yra ${this.kiekMetaliniu} pinigu.`)
    }

    banknotai() {
        console.log(`Pinigineje turime ${this.kiekPopieriniu} banknotu.`)
    }

}

const rudaPinigine = new pinigine();

rudaPinigine.ideti(2);
rudaPinigine.skaiciuoti();
rudaPinigine.ideti(4);
rudaPinigine.skaiciuoti();
rudaPinigine.monetos();
rudaPinigine.banknotai();


// 3. + 4.

class Troleibusas {

    static visiKeleiviai = 0;

    static bendrasKeleiviuSkaicius(skaicius) {
        Troleibusas.visiKeleiviai += skaicius;
    }

    static keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log(`Siuo metu troleibuse vaziuoja ${Troleibusas.visiKeleiviai} keleiviai.`);
    }

    // 3. apacioje
    constructor() {
        this.keleiviuSkaicius = 0;
        this.ghost = 0;
    }

    ilipa(keleivis) {
        this.keleiviuSkaicius += keleivis;
        Troleibusas.bendrasKeleiviuSkaicius(keleivis); // deda i visi keleiviai, cia 4tam reikalinga.
    }

    islipa(keleivis) {
        this.keleiviuSkaicius -= keleivis;
        Troleibusas.bendrasKeleiviuSkaicius(keleivis);
    }

    vaziuoja() {
        if (this.keleiviuSkaicius >= 0) {
            console.log(`Vaziiuoja siuo metu: ${this.keleiviuSkaicius}`)
        } else if (this.keleiviuSkaicius < 0) {
            this.ghost += Math.abs(this.keleiviuSkaicius);
            this.keleiviuSkaicius = 0;
            console.log(`Siuo metu vaziuoja ${this.keleiviuSkaicius} ir ${this.ghost} smeklu.\n Laikas zegnotis.`)
        }
    }


}

const troleibusas = new Troleibusas();
const troleibusas2 = new Troleibusas();

troleibusas.ilipa(15);
troleibusas.vaziuoja();
troleibusas.islipa(16);
troleibusas.vaziuoja();

troleibusas2.ilipa(25);
troleibusas2.vaziuoja();
troleibusas2.islipa(11);
troleibusas2.vaziuoja();

Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();


// 5.

console.log('\n Penktas uzdavinys')

class PirkiniuKrepselis {

    constructor() {
        this.turinys = new Map();
    };

    idetiSureli(kiekis) {
        const sureliai = this.turinys.get('Surelis') || 0;
        this.turinys.set('Surelis', sureliai + kiekis);
    }

    idetiPieno(kiekis) {
        const pienas = this.turinys.get('Pienas') || 0;
        this.turinys.set('Pienas', pienas + kiekis);
    }

    idetiDuonos(kiekis) {
        const duona = this.turinys.get('Duona') || 0;
        this.turinys.set('Duona', duona + kiekis);
    }

    krepselioTurinys() {
        const tekstas = [...this.turinys]
            .map(([preke, kiekis]) => `${preke}: ${kiekis}`)
            .join(', ');

        console.log(`Siuo metu krepselyje turime: ${tekstas}`);
    }


}

const pirkiniuKrepselis = new PirkiniuKrepselis();

pirkiniuKrepselis.idetiDuonos(1);
pirkiniuKrepselis.idetiDuonos(6);
pirkiniuKrepselis.idetiPieno(1);
pirkiniuKrepselis.idetiPieno(1);
pirkiniuKrepselis.idetiSureli(2);
pirkiniuKrepselis.idetiSureli(2);

pirkiniuKrepselis.krepselioTurinys();

