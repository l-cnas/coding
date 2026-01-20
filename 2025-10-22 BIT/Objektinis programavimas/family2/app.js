console.log('OOP');

class Box {

    getColor() {
        return 'red';
    }

    getWeight() {
        return 20;
    }

}


class Ball extends Box {

    getColor() {
        return 'blue';
    }

    getMaterial() {
        return 'plastic';
    }

}

const ball1 = new Ball();
console.log(ball1.getMaterial()); // metodas yra nuosavas
console.log(ball1.getWeight());   // metodas paveldėtas iš tėvinės klasės
console.log(ball1.getColor());    // metodas yra nuosavas ir jis perrašo tėvo metodą


class OldMan65 {

    getSocial() {
        return 'Facebook';
    }

}

class Man40 extends OldMan65 {

    getSocial() {
        return 'Instagram';
    }
}

class YoungMan18 extends Man40 {

    getSocial() {
        return 'Tik Tok';
    }

}

const man65 = new OldMan65();
const man40 = new Man40();
const man18 = new YoungMan18();

console.log(man65.getSocial());
console.log(man40.getSocial());
console.log(man18.getSocial());