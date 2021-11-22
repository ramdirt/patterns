


class Motocycle {
    constructor() {
        this._engine = null;
        this._suspension = null;
        this._tyres = null;
    }

    set setEngine(engine) {
        this._engine = engine;
    }
    get setEngine() {
        return this._engine;
    }

    showFeature() {
        for (let key in this) {
            console.log(this[key])
        }
    }
}

class Engine {
    constructor(model, hp, tq, rpm) {
        this._model = model
        this._hp = hp;
        this._tq = tq;
        this._rpm = rpm;
    }

}

class Mechanic {
    constructor() {
    }
}

const KTM = new Motocycle();
const XSF450 = new Engine('XSF450', 50, 45, 14000);
KTM.setEngine = XSF450;
KTM.showFeature()