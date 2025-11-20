class Hero {
    constructor(name, age, classHero) {
        this.name = name;
        this.age = age;
        this.classHero = classHero;
    }

    attack(classHero) {
        let typeAttack;
        if (classHero === "guerreiro") {
            typeAttack = "espada";
        } else if (classHero === "mago") {
            typeAttack = "magia";
        } else if (classHero === "monge") {
            typeAttack = "artes marciais";
        } else if (classHero === "ninja") {
            typeAttack = "shuriken";
        } else {
            typeAttack = "ataque de punho";
        }
        console.log(`${this.classHero} atacou usando ${typeAttack}`);
    }
}

let hero1 = new Hero("Aragorn", 87, "guerreiro");
let hero2 = new Hero("Gandalf", 2019, "mago");
let hero3 = new Hero("Naruto", 17, "ninja");
let hero4 = new Hero("Bruce Lee", 32, "monge");
hero1.attack(hero1.classHero);
hero2.attack(hero2.classHero);
hero3.attack(hero3.classHero);
hero4.attack(hero4.classHero);