import Race from './Race';

class Orc extends Race {
  private _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.countInstances();
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static countInstances() {
    Orc.instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instances;
  }
}

export default Orc;