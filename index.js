import Warrior from "./src/warrior.js";
import Arena from "./src/arena.js";

const warrior1 = new Warrior("Chuck Norris", 3, 30);
warrior1.renderInfo();

console.log("VS.");

const warrior2 = new Warrior("Rambo", 3, 30);
warrior2.renderInfo();

const arena = new Arena();
arena.match(warrior1, warrior2, 5);
