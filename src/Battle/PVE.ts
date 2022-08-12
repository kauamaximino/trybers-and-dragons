import Battle from './Battle';
import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';

class PVE extends Battle {
  private _fighter: Character | Fighter;
  private _enemies: Monster[] | SimpleFighter[] | Fighter[];

  constructor(
    fighter: Character | Fighter,
    enemies: Monster[] | SimpleFighter[] | Fighter[],
  ) {
    super(fighter);
    this._fighter = fighter;
    this._enemies = enemies;
  }
  
  fight() {
    if (this._enemies.length > 0) {
      this._enemies.forEach((monster) => {
        while (this._fighter.lifePoints > 0 && monster.lifePoints > 0) {
          this._fighter.attack(monster);
          monster.attack(this._fighter);
        }
      });
    }
    return super.fight();
  }
}

export default PVE;