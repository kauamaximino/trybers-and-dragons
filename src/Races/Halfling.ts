import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.countInstances();
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static countInstances() {
    Halfling.instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }
}

export default Halfling;