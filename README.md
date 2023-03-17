# node_warriors_fight
test task for the position of node developer

Test Node.js
Use of the Internet: Yes
Duration of test: max. 120 minutes
Part of the task is a class representing a warrior (see warrior.js). Your task is to add functionality
and make a fight between two warrior instances.
The solution is evaluated by fulfilling the task and quality of the code.
We recommend to follow the steps in this order:
1. Every warrior has a name and values of attack and defence.
2. The warrior contains a method doAttack(defender) and you need to implement:
a. The amount of damage to the defending warrior must be based on his defence value
and attack value of the second fighter
b. The amount of damage is increased by a random number which represents dice roll
(1-6)
3. When warrior's health drops below one, the status has to be handled. For example with
Error.
4. A fighter with less than half of max. amount of HP gets into Berserk* mode and rolls the dice
3x in a row (only in the next round).
5. Create a class representing the arena where fighters can fight:
a. It will contain a method match(warrior1, warrior2), where these two warriors fight.
b. Method match() will also contain another parameter that represents how many rounds
the fight will have. The fight can end up as a tie. Otherwise wins the one with more
HP.
c. Fighters take turns who attacks first after each round.
d. Every attack causes at least 1 damage.
6. If a warrior loses all his HP, the fight ends immediately.
7. Print all results and process of the fights.
* Berserkr = battle frenzy when a fighter is extremely dangerous

