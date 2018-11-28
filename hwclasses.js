class monster {
    constructor(name, type, combatpower) {
        this._name = name;
        this._type = type;
        this._combatpower = combatpower;
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    get combatpower() {
        return this._combatpower;
    }
    changename() {
        console.log(`This monster no longer ${this._name} `)
        this._name = `My ONLY ${this._name}`
        console.log(`It has became '${this._name}'`)
    }
    makeattack() {
        if (this._combatpower >= 3000) {
            console.log(`${this._name} is ready to attack`)
        } else if (this._combatpower < 0) {
            console.log(`Really? How can combat power be negative? ${this._combatpower}?`)
        } else {
            console.log(`${this._name} need more training`)
        }
    }
}

class evolvedmoster extends monster {
    constructor(name, type, combatpower, speed, weapon) {
        super(name, type, combatpower)
        this._speed = speed;
        this._weapon = weapon;
    }
    get speed() {
        return this._speed;
    }
    get weapon() {
        return this._weapon;
    }
    changeweapon() {
        if (this._weapon === 'flip flop') {
            console.log(`${this._name} already have '${this._weapon}' which is the best weapon in the World!`)
        } else {
            this._weapon = 'flip flop'
            console.log(`Congratz, Now ${this._name} have the best weapon in the world: ${this._weapon}`)
        }
    }
}

let pikachu = new monster("Pikachu", "pokemon", 3500)
let lion = new monster("Lion", 'Scary', 1800)
pikachu.changename();
pikachu.makeattack();
lion.makeattack();

let raichu = new evolvedmoster('Raichu', 'pokemon', 5000, 100, 'ElectricTail')
let Cesar = new evolvedmoster('Cesar', 'human', 300, 25, 'flip flop')
Cesar.makeattack();
Cesar.changeweapon();
raichu.changeweapon();