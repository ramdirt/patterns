'use strict';

class Character {
    constructor() {
        this._type = null;
        this._hp = 100
    }
    set setWeapon(weapon) {
        this._type = weapon;
    }
    get setWeapon() {
        return this._weaponBehavior
    }
    fight() {
        this._type.useWeapon();
    }
    calcDamage() {
        return this._type._type.dmg * this._type._type.speed
    }
}
class CharacterKing extends Character {
    constructor() {
        super();
        this._hp += 40;
    }
    horn() {
        console.log('Орать')
    }
    viewHP() {
        console.log(this._hp)
    }
}

class Weapon {
    constructor() {
        this._type = null;
    }
    set type(weapon) {
        this._type = weapon
    }
    get type() {
        return this._type
    }
    useWeapon() {
        if (this._type != null) {
            console.log(this._type.type)
        } else {
            console.log('Оружие не выбрано')
        }   
    }
    dps() {
        console.log(this._type.speed * this._type.dmg)
    }
}

class SwordBehavior {
    constructor() {
        this.speed = 1.5;
        this.dmg = 15;
        this.type = 'Меч'
    }
}
class AxeBehavior {
    constructor() {
        this.speed = 1.25;
        this.dmg = 25;
        this.type = 'Топор';
    }
}

const hero = new CharacterKing();
const weapon = new Weapon();
const sword = new SwordBehavior();
const axe = new AxeBehavior();

weapon.type = axe;
hero.setWeapon = weapon
hero.fight();
hero.calcDamage();


Vue.component('hero', {
    data() {
        return {
            health: hero._hp,
            damage: hero.calcDamage(),
            weapon: 'Топор'
        }
    },
    template: `
        <div class="hero" v-show="health >= 0">
            <div class="hero_health">{{ health }}</div>
            <div class="hero_weapon">{{ weapon }}</div>
        </div>
    `,
    // methods: {
    //     hit() {
    //         this.health -= this.damage
    //         console.log(this.$root.heroDamage)
    //     }
    // },
    mounted() {
        this.$root.heroDamage = this.damage
    }
})