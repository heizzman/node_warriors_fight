import Warrior from "./warrior.js";

export default class Arena {
  match(unit1, unit2, rounds) {
    const startBit = (attacker, defender, berserk = false) => {
      console.log(
        `${attacker.name} att:${attacker.attack} def:${attacker.defense} liv:${attacker.lives}`
      );
      attacker.doAttack(defender);

      const textBerserk = berserk ? " BERSERK!" : "";

      console.log(
        ` attacked ${defender.name} att:${defender.attack} def:${defender.defense} liv:${defender.lives} (damage: ${defender._currentAttackDamage}) ${textBerserk}`
      );
    };

    const innerFight = (attacker, defender) => {
      if (attacker.isLive()) {
        // A fighter with less than half of max. amount of HP gets into Berserk* mode and rolls the dice
        // 3x in a row
        if (attacker._isBerserkerTime) {
          attacker._isBerserkerTime = false;
          for (let i = 0; i < 3; i++) {
            startBit(attacker, defender, true);
          }
        } else {
          startBit(attacker, defender);
        }
      }

      if (defender.isLive()) {
        // it`s time to Berserk
        defender.checkTimeToBerserk();
        innerFight(defender, attacker);
      } else {
        // If a warrior loses all his HP, the fight ends immediately
        console.log(`${attacker.name} wins, round ${this._round}`);
        console.log("________________________________________________");
      }
    };

    this._unit01 = new Warrior();
    this._unit02 = new Warrior();

    console.log("START________________________________________________");
    for (let i = 0; i < rounds; i++) {
      this._round = i + 1;
      console.log(`round ${this._round}`);

      this._unit01 = Object.assign(this._unit01, unit1);
      this._unit02 = Object.assign(this._unit02, unit2);

      //Fighters take turns who attacks first after each round.
      if (this._round % 2 === 0) {
        innerFight(this._unit01, this._unit02);
      } else {
        innerFight(this._unit02, this._unit01);
      }
    }
    console.log("FINISH");
  }
}
