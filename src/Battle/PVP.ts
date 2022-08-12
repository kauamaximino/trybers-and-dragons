import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _fighter1: Character | Fighter;
  private _fighter2: Character | Fighter;

  constructor(fighter1: Character | Fighter, fighter2: Character | Fighter) {
    super(fighter1);
    this._fighter1 = fighter1;
    this._fighter2 = fighter2;
  }

  fight() {
    while (this._fighter1.lifePoints > 0 && this._fighter2.lifePoints > 0) {
      this._fighter1.attack(this._fighter2);
      this._fighter2.attack(this._fighter1);
    }
    return super.fight();
  }
}

export default PVP;