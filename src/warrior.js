import { randomInteger } from "./utils.js";
import {
  CONSTANT_LIVES,
  CONSTANT_MIN_DAMAGE,
  CONSTANT_MAX_DAMAGE,
} from "./constants.js";

// const WarriorModule = (() => {
  export default class Warrior {
  // class Warrior {
    constructor(name, attack, defense) {
      this._name = name;
      this._lives = CONSTANT_LIVES;
      this._attack = attack;
      this._defense = this._fullDefense = defense; //fullDefense -> for activation Berserker mode
      this._isBerserkerTime = false;
      this._isBerserkerDone = false;
      this._currentAttackDamage = 0;
    }

    get name() {
      return this._name;
    }

    get lives() {
      return this._lives;
    }

    get attack() {
      return this._attack;
    }

    get defense() {
      return this._defense;
    }

    //The amount of damage to the defending warrior must be based on his defence value
    // and attack value of the second fighter
    receiveDamage(damage) {
      const minDamage = Math.min(this._defense, damage);
      this._defense -= minDamage; //defense will suffer first
      const minLives = Math.min(this._lives, damage - minDamage);
      this._lives -= minLives;
    }

    isLive() {
      return this._lives > 1;
    }

    checkTimeToBerserk() {
      if (
        !this._isBerserkerDone &&
        this._fullDefense &&
        this._defense / this._fullDefense < 0.5
      ) {
        this._isBerserkerTime = true;
        this._isBerserkerDone = true;
      }
    }

    // The amount of damage is increased by a random number which represents dice roll
    incAttack(val) {
      this._attack += val;
    }

    doAttack(defender) {
      const currentAttackDamage = randomInteger(
        CONSTANT_MIN_DAMAGE,
        CONSTANT_MAX_DAMAGE
      );

      defender._currentAttackDamage = currentAttackDamage + this._attack; //comment to console
      defender.receiveDamage(currentAttackDamage + this._attack);
      //this.incAttack(currentAttackDamage);
    }

    renderInfo() {
      console.log(`${this.name}`);
      console.log(
        `Lives: ${this.lives}`,
        `Attack: ${this.attack}`,
        `Defense: ${this.defense}`
      );
    }
  }
//   return {
//     Warrior,
//   };
// })();

// export default WarriorModule;
